// Inicializa Firebase (compat SDK) y expone helpers compartidos entre las 3 páginas
(function () {
  firebase.initializeApp(window.FIREBASE_CONFIG);
  const auth = firebase.auth();
  const db = firebase.database();

  window.VereApp = {
    db,
    auth,
    // Promesa que resuelve con el usuario anónimo autenticado.
    // Se rechaza si la Autenticación Anónima no está habilitada en Firebase.
    ready: new Promise((resolve, reject) => {
      let settled = false;
      auth.onAuthStateChanged(user => {
        if (user && !settled) {
          settled = true;
          resolve(user);
        }
      });
      auth.signInAnonymously().catch(err => {
        if (!settled) {
          settled = true;
          console.error("Error de autenticación anónima:", err);
          reject(err);
        }
      });
    })
  };
})();
