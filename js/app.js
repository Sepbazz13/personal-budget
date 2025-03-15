// Obtener el formulario por su ID
const form = document.getElementById("transaction-form");
const transacciones = [];

function getDataFromForm() {
  const formData = new FormData(form);
  const description = formData.get("description"); // Captura la descripción
  const amount = formData.get("amount"); // Captura el monto
  const type = formData.get("type"); // Captura el tipo (income/expense)

  return {
    description,
    amount,
    type,
  };
}

function createMovement(movement) {
  const nuevoMovimiento = new Movimiento(
    movement.type,
    movement.amount,
    movement.description
  );

  const validacion = nuevoMovimiento.validarMovimiento();

  if (validacion.ok) {
    transacciones.push(nuevoMovimiento);
    alert(validacion.message);
    form.reset();
    nuevoMovimiento.recalcularTotales(); // Actualizar los totales
    nuevoMovimiento.mostrarTransacciones(); // Mostrar las transacciones en la tabla
  } else {
    alert(validacion.message);
  }
}

// Escuchar el evento submit del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue
  const newMovement = getDataFromForm();
  createMovement(newMovement);
});

// Constructor de Movimiento
function Movimiento(tipo, monto, descripcion) {
  this.tipo = tipo;
  this.monto = monto;
  this.descripcion = descripcion;
}

// Método para recalcular los totales de ingresos y egresos
Movimiento.prototype.recalcularTotales = function () {
  let totalIngresos = 0;
  let totalEgresos = 0;

  transacciones.forEach((movimiento) => {
    if (movimiento.tipo === "income") {
      totalIngresos += Number(movimiento.monto);
    } else if (movimiento.tipo === "expense") {
      totalEgresos += Number(movimiento.monto);
    }
  });

  // Actualizar la interfaz de usuario con los nuevos totales
  document.getElementById("income").textContent = `$${totalIngresos.toFixed(2)}`;
  document.getElementById("expense").textContent = `$${totalEgresos.toFixed(2)}`;
  document.getElementById("balance").textContent = `$${(totalIngresos - totalEgresos).toFixed(2)}`;
};

// Método para mostrar las transacciones en la tabla
Movimiento.prototype.mostrarTransacciones = function () {
  const transactionList = document.getElementById("transaction-list");
  transactionList.innerHTML = ""; // Limpiar la tabla antes de actualizar

  if (transacciones.length === 0) {
    transactionList.innerHTML = `
      <tr class="text-sm text-gray-500">
        <td colspan="4" class="px-6 py-4 text-center">No hay movimientos registrados</td>
      </tr>
    `;
    return;
  }

  transacciones.forEach((movimiento) => {
    const row = document.createElement("tr");
    row.classList.add("text-sm", "text-gray-500");

    const tipoClass = movimiento.tipo === "income" ? "text-green-600" : "text-red-600";

    row.innerHTML = `
      <td class="px-6 py-4">${movimiento.tipo === "income" ? "Ingreso" : "Gasto"}</td>
      <td class="px-6 py-4">${movimiento.descripcion}</td>
      <td class="px-6 py-4 ${tipoClass}">${movimiento.tipo === "income" ? "+" : "-"}$${Math.abs(movimiento.monto).toFixed(2)}</td>
      <td class="px-6 py-4 text-right">
        <button class="text-red-600 hover:text-red-800" onclick="eliminarMovimiento(${transacciones.indexOf(movimiento)})">Eliminar</button>
      </td>
    `;

    transactionList.appendChild(row);
  });
};

// Método para eliminar un movimiento
function eliminarMovimiento(index) {
  transacciones.splice(index, 1); // Eliminar el movimiento del array
  const movimiento = new Movimiento(); // Crear una instancia para acceder a los métodos
  movimiento.recalcularTotales(); // Recalcular los totales
  movimiento.mostrarTransacciones(); // Actualizar la tabla
}

// Método para validar el movimiento
Movimiento.prototype.validarMovimiento = function () {
  if (this.monto <= 0) {
    return {
      ok: false,
      message: "El monto debe ser mayor a 0",
    };
  }

  if (this.descripcion.trim() === "") {
    return {
      ok: false,
      message: "Debe completar la descripción",
    };
  }

  if (!["income", "expense"].includes(this.tipo)) {
    return {
      ok: false,
      message: "El valor tipo es erróneo",
    };
  }

  return {
    ok: true,
    message: "Movimiento validado correctamente",
  };
};