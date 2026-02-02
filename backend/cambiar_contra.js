// cambiar_contra.js
// Cambia estos datos
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs'); // ya viene con Strapi

const NUEVA_CONTRA = "19Diciembre2004!"; // tu nueva contraseña
const ID_ADMIN = 1; // el id del usuario admin que quieres cambiar
const DB_PATH = './data.db'; // ruta a tu base de datos SQLite

// Abrir DB
const db = new sqlite3.Database(DB_PATH);

bcrypt.hash(NUEVA_CONTRA, 10, (err, hash) => {
  if (err) {
    console.error("Error al generar hash:", err);
    process.exit(1);
  }

  db.run(
    `UPDATE admin_users SET password = ? WHERE id = ?`,
    [hash, ID_ADMIN],
    function (err) {
      if (err) console.error("Error al actualizar la contraseña:", err);
      else console.log(`Contraseña cambiada correctamente para admin id=${ID_ADMIN}`);
      db.close();
    }
  );
});
