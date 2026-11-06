// Formulario de reserva: compone el mensaje y lo abre en WhatsApp (la web no tiene servidor).
(function () {
  var WA = '34663744976';
  var lang = document.documentElement.lang;

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
    var T = {
      es: ['Hola, me gustaría solicitar una reserva en Espina:', 'Nombre', 'Fecha', 'Hora', 'Personas', 'Teléfono', 'Comentarios'],
      en: ['Hello, I would like to request a table at Espina:', 'Name', 'Date', 'Time', 'Guests', 'Phone', 'Notes'],
      de: ['Hallo, ich möchte gerne einen Tisch im Espina reservieren:', 'Name', 'Datum', 'Uhrzeit', 'Personen', 'Telefon', 'Anmerkungen']
    };
    var L = T[lang] || T.es;
    var lines = [
      L[0],
      '• ' + L[1] + ': ' + f.nombre.value.trim(),
      '• ' + L[2] + ': ' + d,
      '• ' + L[3] + ': ' + f.hora.value,
      '• ' + L[4] + ': ' + f.personas.value,
      '• ' + L[5] + ': ' + f.telefono.value.trim()
    ];
    var c = f.comentarios.value.trim();
    if (c) lines.push('• ' + L[6] + ': ' + c);
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    var ok = document.getElementById('reserva-ok');
    if (ok) ok.hidden = false;
  });
})();
