/* Becas Chocó · comportamiento común de cada fold
   1) Link único del formulario para todos los botones "Quiero aplicar"
   2) Si el fold vive dentro de un iframe: abre links en la página padre
      y reporta su altura para que el iframe no tenga scroll interno. */
(function () {
  // >>> Cambiar aquí cuando exista el formulario de inscripción <<<
  var BCH_APPLY_URL = "#formulario-inscripcion";

  document.querySelectorAll("[data-apply]").forEach(function (a) {
    a.setAttribute("href", BCH_APPLY_URL);
  });

  var inFrame = window.self !== window.top;
  if (!inFrame) return;

  document.querySelectorAll("a[href]").forEach(function (a) {
    if (!a.getAttribute("target")) a.setAttribute("target", "_top");
  });

  var fold = document.body.getAttribute("data-fold") || document.title;
  var last = 0;
  function report() {
    var h = Math.ceil(document.documentElement.getBoundingClientRect().height);
    if (h === last) return;
    last = h;
    window.parent.postMessage({ type: "bch-fold-height", fold: fold, height: h }, "*");
  }
  if ("ResizeObserver" in window) new ResizeObserver(report).observe(document.documentElement);
  window.addEventListener("load", report);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(report);
  document.addEventListener("toggle", report, true); // acordeones <details>
  report();
})();
