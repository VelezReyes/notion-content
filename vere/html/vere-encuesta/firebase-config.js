// ⚠️  CONFIGURA TU FIREBASE AQUÍ  ⚠️
// Ve a Firebase Console → ⚙️ Configuración del proyecto → Tus apps → "SDK setup and configuration"
// y copia los valores dentro del objeto de abajo. Reemplaza TODO lo que dice "TU_...".
window.FIREBASE_CONFIG = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  databaseURL: "https://TU_PROYECTO-default-rtdb.firebaseio.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxxxxxxxxxx"
};

// PIN para entrar a la pantalla de administrador (/admin.html).
// Esto NO es seguridad real (cualquiera con el archivo puede verlo si mira el código fuente),
// solo evita que alguien entre por accidente. Cámbialo si quieres.
window.ADMIN_PIN = "VERE2026";
