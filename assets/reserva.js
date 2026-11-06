// Formulario de reserva: compone el mensaje y lo abre en WhatsApp (la web no tiene servidor).
(function () {
  var WA = '34663744976';
  var en = document.documentElement.lang === 'en';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var v = document.querySelector('.hero__video');
    if (v) { v.removeAttribute('autoplay'); v.pause(); }
  }

  var form = document.getElementById('reserva-form');
  if (!form) return;

  var date = form.elements.fecha;
  var t = new Date();
  date.min = new Date(t.getTime() - t.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var f = form.elements;
    var d = f.fecha.value.split('-').reverse().join('/');
    var lines = en ? [
      'Hello, I would like to request a table at Espina:',
      '• Name: ' + f.nombre.value.trim(),
      '• Date: ' + d,
      '• Time: ' + f.hora.value,
      '• Guests: ' + f.personas.value,
      '• Phone: ' + f.telefono.value.trim()
    ] : [
      'Hola, me gustaría solicitar una reserva en Espina:',
      '• Nombre: ' + f.nombre.value.trim(),
      '• Fecha: ' + d,
      '• Hora: ' + f.hora.value,
      '• Personas: ' + f.personas.value,
      '• Teléfono: ' + f.telefono.value.trim()
    ];
    var c = f.comentarios.value.trim();
    if (c) lines.push((en ? '• Notes: ' : '• Comentarios: ') + c);
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    var ok = document.getElementById('reserva-ok');
    if (ok) ok.hidden = false;
  });
})();
