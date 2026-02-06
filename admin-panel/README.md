# Panel Administrativo — Angular Material

Panel de administración (front-end) construido con **Angular** y **Angular Material**, como taller de interfaces profesionales (Semana 12).

## Cómo ejecutar el proyecto

1. **Requisitos:** Node.js (v18 o superior) y npm.

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Levantar el servidor de desarrollo:**
   ```bash
   ng serve
   ```
   o bien:
   ```bash
   npm start
   ```

4. Abrir en el navegador: [http://localhost:4200](http://localhost:4200).

## Tema de colores y tipografía

- **Tema:** Se eligió un tema personalizado (no el por defecto de Material).
- **Colores:** Paleta primaria **Azure** (`mat.$azure-palette`) y color terciario/accento **Naranja** (`mat.$orange-palette`), tipo claro (`theme-type: light`), aplicado en `src/styles.scss` con el mixin `mat.theme()`.
- **Tipografía:** Texto general con **Roboto** y títulos/marca con **Open Sans** (configuración `plain-family` y `brand-family`), con pesos 400, 500 y 700.
- **Densidad:** Valor por defecto (0).

La identidad visual se controla desde un único archivo de estilos globales, manteniendo consistencia en toda la SPA.

## Estructura de la aplicación

- **Layout tipo Dashboard:** `MatSidenav` (menú lateral) y `MatToolbar` (cabecera). El menú se abre/cierra con el botón de hamburguesa y en vista móvil funciona en modo superpuesto (over).
- **Registro de usuario:** Formulario reactivo con `MatFormField`, `MatInput`, `MatSelect` (Rol) y `MatDatepicker` (fecha de nacimiento). Validaciones (requerido, email válido); el botón "Guardar" está deshabilitado si el formulario es inválido.
- **Lista de usuarios:** `MatTable` con datos de ejemplo; acciones "Ver detalles" y "Eliminar" por fila. Ambas abren un `MatDialog` (modal): en "Ver detalles" se muestran los datos del usuario; en "Eliminar" se pide confirmación antes de quitar la fila.

## Tecnologías

- Angular 21
- Angular Material 21
- Angular CDK (layout breakpoints para menú responsivo)
- Animaciones habilitadas (`provideAnimations()`)
- Datepicker con `provideNativeDateAdapter()`

## Notas para el informe de evidencias

- **Dashboard:** Capturar menú lateral abierto y cerrado (y en móvil si se desea).
- **Formulario:** Mostrar mensajes de error al dejar campos vacíos o con email inválido.
- **Diálogo:** Captura del modal abierto (detalles o confirmación de eliminación).
- **Desafío técnico:** El Datepicker de Angular Material requiere un proveedor de fechas (por ejemplo `provideNativeDateAdapter()` en `app.config.ts`). Sin él, el componente no puede parsear ni formatear fechas; es un caso típico de inyección de dependencias para configuración global.
