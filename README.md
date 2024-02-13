# Quasar App (prueba-tecnica)

Prueba Tecnica Quasar + Vue 3

### Clonar repositorio

git clone https://github.com/AissamBenKerta/prueba-tecnica.git

### Para instalar las dependencias
```bash
yarn
# or
npm install
```

### Iniciar la Aplicación 
```bash
quasar dev
```

## Estructura de la Aplicación:
### Listado de Perros:

La página principal de la aplicación presenta una tabla que muestra un listado de perros.
Cada fila de la tabla contiene información como la foto del perro, su nombre, raza, tamaño y color.
La información se recupera desde Firebase y se muestra dinámicamente en la tabla.
Operaciones CRUD:

### Crear Nuevo Perro:

La aplicación permite agregar nuevos perros a través de un formulario.
El formulario incluye campos para la foto, nombre, raza, tamaño y color del perro.
Una vez completado el formulario, la información se envía a Firebase para ser almacenada.

### Editar Perro:

Cada fila en la tabla tiene una opción de "Editar" que permite modificar la información del perro.
Al hacer clic en "Editar", se abre un formulario prellenado con la información actual del perro.
Los cambios realizados en el formulario se actualizan en Firebase.

### Eliminar Perro:

Junto a cada perro en la tabla, hay un botón de "Eliminar" que permite eliminar ese perro específico.
Al hacer clic en "Eliminar", se elimina la entrada correspondiente en la base de datos de Firebase.

## Tecnologías Utilizadas:
### Quasar:

Quasar es un framework Vue.js que facilita la creación de aplicaciones multiplataforma (web, móvil, etc.).
Proporciona componentes predefinidos y una estructura de proyecto coherente.

### Vue 3:

Vue 3 es una biblioteca de JavaScript para construir interfaces de usuario.
Facilita la creación de componentes reutilizables y la gestión del estado de la aplicación.

### Firebase:

Se utiliza Firebase como backend para almacenar y gestionar los datos de los perros.
Firebase Realtime Database o Cloud Firestore podrían ser opciones para almacenar la información de la tabla.

## Flujo de Trabajo:

Al iniciar la aplicación, se carga la información de los perros desde Firebase y se muestra en la tabla.
Al hacer clic en "Agregar Perro", se abre un formulario para ingresar la información del nuevo perro, que luego se envía a Firebase.
Al hacer clic en "Editar" en una fila de la tabla, se abre un formulario prellenado con la información actual del perro, que se puede modificar y actualizar en Firebase.
Al hacer clic en "Eliminar" en una fila de la tabla, se elimina la entrada correspondiente en Firebase, y la tabla se actualiza automáticamente.
