# 🎶 MELOMANIAC — Tienda de Música Física (Cartoon-Brutalism)

**MELOMANIAC** es una aplicación web e-commerce dedicada a la cultura de la música en formato físico (**Vinilos LP 12"**, **Casetes de Cromo CrO₂** y **CDs de Colección**). El proyecto combina una experiencia de compra interactiva con una dirección de arte **Cartoon-Brutalist** que fusiona la animación *Rubber-Hose* de los años 30 con el diseño gráfico discográfico de los años 70.

---

## ✨ Estética y Dirección de Arte

El sistema visual se apoya en tres pilares estéticos:

1. **Neo-Brutalismo Editorial**:
   - Contenedores, tarjetas y botones delimitados por trazos gruesos de tinta oscura (`3px`–`4px solid #260701`) y sombras proyectadas sólidas sin desenfoque (`6px 6px 0px #260701`).
   - Micro-interacciones elásticas (`cubic-bezier(0.34, 1.56, 0.64, 1)`) que elevan e inclinan ligeramente las tarjetas al pasar el cursor, haciendo que el soporte físico (vinilo, casete o CD) asome fuera de su funda.
2. **Animación *Rubber-Hose* Años 30 (*Cuphead* / Fleischer)**:
   - Ilustraciones vectoriales propias con ojos tipo *Pie-Cut* (pupilas con muesca triangular), extremidades curvas en manguera, guantes blancos de caricatura y animación constante de rebote (`rubberBounce`).
3. **Gráfica Discográfica Años 70**:
   - Cintas concéntricas multicapa (amarillo, naranja, bermellón y tinta), *Hype Stickers* animados en forma de estrella o píldora sobre cada portada y fondo cálido de papel pergamino serigrafiado.

---

## 🎭 Los 3 Apartados y sus Personajes Anfitriones

El catálogo se divide en **3 apartados físicos**, cada uno representado por su propio personaje en SVG ([`src/components/FormatCharacters.tsx`](./src/components/FormatCharacters.tsx)) y su propia **Ficha Maestra de Producto** ([`src/components/FormatProductPage.tsx`](./src/components/FormatProductPage.tsx)):

| Apartado | Formato | Personaje Anfitrión | Rasgos Visuales |
| :--- | :--- | :--- | :--- |
| **Apartado de Vinilos** | `LP` (12" • 180g) | **Don Surco** | Cuerpo de vinilo negro microsurco, galleta central años 70, sombrero de aguja fonográfica, ojos *Pie-Cut* y botas clásicas. |
| **Apartado de Casetes** | `CASSETTE` (CrO₂) | **Max Cromo** | Carcasa compacta bermellón donde las dos bobinas centrales forman sus ojos *Pie-Cut* y la cinta magnética dibuja su sonrisa en el cabezal. |
| **Apartado de CDs** | `CD` (Red Book / Obi) | **Lady Láser** | Disco óptico espejo con sectores prismáticos cálidos, anillo central de policarbonato, destello estelar láser y zapatillas retro. |

> **Navegación por Ficha de Formato**: Al hacer clic sobre cualquier tarjeta del catálogo, el usuario accede a la página de producto correspondiente a su formato físico (**Ficha de Vinilo**, **Ficha de Casete** o **Ficha de CD**), donde puede extraer o guardar interactivamente el disco/casete de su portada, consultar especificaciones técnicas, ver la reseña del personaje y reproducir el *tracklist* completo.

---

## 🎨 Paleta de Colores y Contraste

La paleta evita el negro puro (`#000000`) y el blanco clínico (`#ffffff`), empleando tonos cálidos de tinta tostada, papel antiguo y pigmentos analógicos con relaciones de contraste verificadas (WCAG AA/AAA):

| Token CSS | Color Hex | Rol en la Interfaz |
| :--- | :--- | :--- |
| `--ink-dark` | `#260701` | Tinta principal para textos, bordes brutalistas, sombras sólidas y fondo del reproductor inferior. |
| `--ink-brown` | `#4a1504` | Texto secundario de alto contraste para metadatos técnicos, subtítulos y duraciones. |
| `--paper-cream` | `#fdf6e2` | Superficie principal de tarjetas de producto, cabeceras y textos claros sobre fondos oscuros (ratio **> 17:1** sobre `#260701`). |
| `--paper-warm` | `#f5e6c4` | Superficie secundaria para barras de filtros, cajas de pistas y paneles interiores. |
| `--retro-yellow` | `#f9a602` | Acento luminoso principal para botones de compra, insignias activas, vúmetro y destacados en el reproductor. |
| `--retro-orange` | `#f96d00` | Acento cálido para precios (`.price-display`), cintas años 70 y estados *hover*. |
| `--retro-red` | `#d91e00` | Acento intenso para llamadas a la acción principales (`MI MALETA`), estados de reproducción activa y *Hype Stickers*. |
| `--retro-crimson` | `#9e1b00` | Color de alto contraste sobre crema para nombres de artistas y citas de personajes. |
| `--bg-sand-light / mid / warm` | `#f4e7c8` → `#d9b574` | Gradiente luminoso de fondo de página con micro-trama editorial sutil (`0.065`) que realza las tarjetas sin generar ruido visual. |

---

## 🔤 Tipografía

1. **`Caprasimo` (Display — Estilo Cartel 70s / *Cuphead*)**:
   - Empleada en el logotipo **MELOMANIAC**, cabeceras de sección, precios (`.price-display`) e insignias en estrella.
   - Tratada mediante contorno exterior de tinta (`-webkit-text-stroke` con `paint-order: stroke fill`) y doble sombra sólida para lograr relieve de cartel serigrafiado.
   - Los precios incorporan `white-space: nowrap` y espacios de no separación (`\u00A0€`) para garantizar que el importe y el símbolo `€` permanezcan siempre en la misma línea.
2. **`Plus Jakarta Sans` (UI y Datos Técnicos)**:
   - Utilizada en pesos **600, 700 y 800** para garantizar máxima legibilidad en nombres de pistas, sellos discográficos y especificaciones.
   - Uso sistemático de `font-variant-numeric: tabular-nums` en duraciones (`03:48`), contadores de stock y precios del carrito.

---

## 📱 Diseño Responsivo (Móvil vs. Escritorio)

La interfaz adapta su densidad de información según el dispositivo para evitar saturación visual en pantallas pequeñas:

- **Retícula de Productos**: Muestra **2 productos por fila en móvil** (`grid-cols-2`) con insignias compactas (`VINILO`, `CASETE`, `CD` y `M`, `NM`, `VG+`) y **4 productos por fila en escritorio** (`lg:grid-cols-4`).
- **Filtros sin Recortes**: En móvil, los filtros de *Apartado* y *Estado* se organizan en cuadrículas `2×2` (`grid-cols-2`) con `whitespace-nowrap`, evitando contenedores con *scroll* horizontal que recorten las sombras brutalistas o deformen las píldoras.
- **Funciones Exclusivas de Escritorio (`md:`)**:
  - **Reproductor Sintetizado (`PlayerBar`)**: Sintetiza líneas de bajo funk/soul en tiempo real mediante **Web Audio API** (sin depender de archivos MP3 externos) e incluye vúmetro animado y gaveta de pistas. Se muestra exclusivamente en escritorio para liberar espacio vertical en móvil.
  - **Modo `🎲 ¡Azar!`**: En escritorio, hacer clic sobre el título **MELOMANIAC** selecciona y reproduce un disco aleatorio del catálogo.

---

## 🛠️ Stack Tecnológico y Ejecución

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS** + **CSS Custom Properties** ([`src/index.css`](./src/index.css))
- **Web Audio API** nativa para síntesis de previsualizaciones musicales

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción y verificar tipos
npm run build

# Ejecutar linter
npm run lint
```
