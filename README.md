# Gestor de Presupuesto Personal

Este es un gestor de presupuesto personal que permite a los usuarios registrar ingresos y gastos, visualizar un resumen financiero en tiempo real y gestionar movimientos recientes. El proyecto está desarrollado con CSS (Tailwind CSS) y JavaScript.

## Características principales

### # Registro de movimientos
- Los usuarios pueden agregar nuevos movimientos (ingresos o gastos) mediante un formulario.
- Los movimientos se validan para asegurar que el monto sea mayor a 0 y que la descripción no esté vacía.

### # Resumen financiero
- Muestra el balance total, los ingresos y los gastos en tiempo real.
- Los totales se actualizan automáticamente al agregar o eliminar movimientos.

### # Lista de movimientos recientes
- Muestra una tabla con todos los movimientos registrados.
- Cada movimiento incluye:
  - Tipo (Ingreso o Gasto)
  - Descripción
  - Monto (con colores para diferenciar ingresos y gastos)
  - Botón para eliminar el movimiento

### # Botón "Limpiar Todo"
- Permite eliminar todos los movimientos registrados y restablecer los totales a $0.00.

## Retos adicionales implementados

### # Validación de movimientos
Se implementó un sistema de validación para asegurar que:
- El monto sea mayor a 0
- La descripción no esté vacía
- El tipo de movimiento sea válido (ingreso o gasto)

### # Actualización en tiempo real
- Los totales de ingresos, gastos y balance se actualizan automáticamente cada vez que se agrega o elimina un movimiento.

### # Eliminación de movimientos
- Cada movimiento tiene un botón para eliminarlo individualmente.
- Se implementó un botón "Limpiar Todo" para eliminar todos los movimientos de una sola vez.

### # Interfaz amigable
- Se utilizó Tailwind CSS para diseñar una interfaz moderna y responsive.
- Los movimientos se muestran en una tabla con colores diferenciados para ingresos (verde) y gastos (rojo).

## Decisiones técnicas clave

### # Uso de prototipos en JavaScript
- Se utilizó la herencia de prototipos para crear el objeto Movimiento, lo que permitió encapsular la lógica de validación, cálculo de totales y actualización de la interfaz en métodos reutilizables.

### # Manejo del DOM
- Se utilizó JavaScript para manipular el DOM y actualizar dinámicamente la interfaz sin recargar la página.
- Se implementó la función `mostrarTransacciones` para renderizar la tabla de movimientos de manera eficiente.

### # Validación del formulario
- Se validaron los datos del formulario antes de agregar un movimiento para evitar errores y asegurar la integridad de los datos.

### # Uso de Tailwind CSS
- Se eligió Tailwind CSS para agilizar el desarrollo de la interfaz y garantizar un diseño responsive y moderno.
- Los estilos se aplicaron directamente en el HTML utilizando clases de Tailwind.

### # Estructura del código
- El código se organizó en funciones y métodos para mantenerlo modular y fácil de mantener.
- Se separó la lógica de negocio (validación, cálculo de totales) de la lógica de presentación (actualización del DOM).

## Cómo usar el proyecto

### # Clona el repositorio
```bash
git clone https://github.com/Sepbazz13/personal-budget.git
cd gestor-presupuesto
```

### # Abre el archivo index.html en tu navegador
Simplemente abre el archivo index.html en tu navegador favorito.

### # Agrega movimientos
- Completa el formulario con la descripción, el monto y el tipo de movimiento (ingreso o gasto).
- Haz clic en "Agregar Movimiento" para registrar el movimiento.

### # Elimina movimientos
- Usa el botón "Eliminar" junto a cada movimiento para eliminarlo individualmente.
- Usa el botón "Limpiar Todo" para eliminar todos los movimientos.

## Tecnologías utilizadas
- **HTML**: Estructura de la página.
- **Tailwind CSS**: Estilos y diseño responsive.
- **JavaScript**: Lógica del proyecto y manipulación del DOM.

## Autor
- **Nombre**: [Sebastian Huapaya]
- **GitHub**: [https://github.com/Sepbazz13]
- **Correo electrónico**: [sebshuapaya13@gmail.com]
