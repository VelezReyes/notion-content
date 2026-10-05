# Becas Chocó · landing por folds

Sistema visual de /proyectos/aprendomas/ (Elementor). Paleta Educación: verde #27CF77, negro y crema #F3F1E7, sin morado.

## Estructura
```
index.html                 ← llama los 8 folds (iframes con altura automática)
assets/base.css            ← fuentes WP, colores, tarjetas, botones, responsive
assets/fold.js             ← link del formulario + altura del iframe + links a _top
folds/01-primer-pantallazo.html
folds/02-beneficios.html
folds/03-requisitos.html
folds/04-universidades.html
folds/05-como-funciona.html
folds/06-fecha-clave.html
folds/07-preguntas.html
folds/08-cta-final.html
```
Cada fold abre solo (ej. folds/03-requisitos.html) y también dentro de index.html.

## Cambios rápidos
- **Link del formulario**: `assets/fold.js` → `BCH_APPLY_URL`. Cambia todos los botones "Quiero aplicar" / "Empezar mi inscripción".
- **Fotos (4)**: en cada fold busca `FOTO 0X`. Agrega `style="--img:url('URL-DE-LA-FOTO')"` al div y quita la clase `is-placeholder`. Se ven en B/N por la clase `bch-photo--bn` (quítala si las quieren a color).
  - Foto 01 · Portada (fold 01) · 2400×1400
  - Foto 02 · Vertical (fold 04) · 900×1300
  - Foto 03 · Vertical (fold 05) · 1000×1400
  - Foto 04 · Cuadrada (fold 08) · 1200×1200
- **Carreras**: fold 04, nota "pendiente de listado definitivo".

## Fuentes
- **Azo Sans** (texto): kit de Adobe Fonts `https://use.typekit.net/kis4ayd.css` → `"azo-sans-web"` 400/700 + itálicas. Respaldo: "Azo Sans Web" del WP.
  El kit solo entrega fuentes en los dominios autorizados en Adobe Fonts → Web Projects. Agregar `velezreyesmas.com` y el dominio de GitHub Pages (`USUARIO.github.io`). Abriendo el HTML local (file://) no carga.
- **Bookman JF Pro** (títulos, familia "Ver+"): desde el repo VelezReyes/notion-content (jsDelivr y, si falla, raw.githubusercontent, ambos con CORS abierto). Último respaldo: el .ttf del WP.

## Versión (caché)
Todas las referencias llevan `?v=20261005a` (index → folds, folds → base.css y fold.js).
Al hacer cambios, reemplazar esa versión en todos los archivos (buscar y reemplazar `v=20261005a`) para que GitHub Pages y el navegador no muestren la versión vieja.

## GitHub Pages
Subir la carpeta completa al repo → Settings → Pages → rama main / root. La URL de prueba es `https://USUARIO.github.io/REPO/`.
