# Encuesta de Cultura VERE 2026 — en vivo

App tipo Slido/Kahoot para las 12 preguntas de cultura (escala 1-5), pensada para uso presencial:
la gente responde desde su celular y los resultados se proyectan en pantalla en tiempo real.

## Archivos

- `index.html` — pantalla para **participantes** (celular). Este es el link que se comparte.
- `display.html` — pantalla de **proyección** (la que se conecta al beamer/TV). Muestra la pregunta
  activa como una diapositiva y los resultados en vivo. Incluye un QR de acceso mientras está en "lobby".
- `admin.html` — panel de **administrador** (protegido con PIN). Desde aquí controlas qué pregunta
  está activa, ves los resultados en vivo y el resumen final de las 12 preguntas.
- `data.js` — el contenido de las 2 secciones y las 12 preguntas.
- `firebase-config.js` — **aquí pegas tu configuración de Firebase** (ver más abajo).
- `common.js` / `style.css` — lógica y estilos compartidos.
- `database.rules.json` — reglas de seguridad de Firebase Realtime Database (referencia).

## Cómo funciona

Todo se sincroniza a través de **Firebase Realtime Database**:

- `/session` guarda qué pantalla se está mostrando: `lobby`, `active` (con el índice de la
  pregunta 0-11) o `ended`.
- `/responses/{índice}/{idAnónimo}` guarda cada respuesta (1-5).

Cuando el administrador pulsa "Siguiente", tanto la proyección como todos los celulares conectados
cambian de pregunta automáticamente (no hay que refrescar nada).

## Antes de subir esto a GitHub Pages

1. Crea el proyecto en Firebase (ver instrucciones que te doy en el chat).
2. Pega tu configuración en `firebase-config.js`.
3. Sube estos archivos a un repositorio de GitHub y activa GitHub Pages
   (Settings → Pages → Deploy from branch → main / root).
4. Prueba primero `admin.html` y `display.html` en dos pestañas, y `index.html` desde tu celular,
   antes del evento.

## Seguridad — léelo

Las reglas en `database.rules.json` exigen que cualquiera que lea/escriba esté autenticado
(anónimamente), y cada persona solo puede escribir su **propia** respuesta (no puede pisar las de
otros). El PIN de `admin.html` es solo una traba de uso, no seguridad real: cualquiera que abra el
código fuente puede verlo. Para un evento interno de equipo esto es suficiente; si quisieras algo
más robusto haría falta autenticación real de administrador (Cloud Functions / custom claims), que
no es necesario para este caso de uso.
