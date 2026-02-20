const { execSync } = require("child_process");

try {
  console.log("Importando datos...");
  execSync("npx strapi import ./data-import/export.tar.gz", { stdio: "inherit" });
  console.log("Importación completada.");
} catch (error) {
  console.log("No se pudo importar (puede que ya esté importado).");
}
