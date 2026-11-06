# Espina · Cocina de mar y mercado

Web estática del restaurante Espina, con la carta completa (Entrantes, Del mercado a la mesa, Para compartir).

- `index.html`: página única con la carta (español)
- `de/index.html`: versión en alemán
- `en/index.html`: versión en inglés (los nombres de los platos se mantienen en español con su traducción debajo)
- `styles.css`: estilos (tipografía Cormorant Garamond, azul marino de la carta)
- `assets/espina.svg`: ilustración de la espina de pescado de la portada

Sin dependencias ni proceso de compilación: abre `index.html` o publícala con GitHub Pages (rama, carpeta raíz).

## Publicación

El flujo `.github/workflows/pages.yml` publica la web en GitHub Pages en cada push.
Si es la primera vez, activa Pages en *Settings → Pages → Source: GitHub Actions*.

Contenido multimedia: `assets/video/cabecera.mp4` (vídeo de fondo de la cabecera, sin audio) y `assets/img/` (fotos del cachopo, en 1600 px y 800 px).

## Reservas y contacto

- Dirección, teléfono, mapa (Google Maps) y burbuja flotante de WhatsApp (+34 663 74 49 76).
- El formulario de reserva no necesita servidor: `assets/reserva.js` redacta la solicitud y la abre en WhatsApp para que el cliente la envíe.
- Horario: pendiente (hay un comentario `HORARIO` en el HTML donde va).
