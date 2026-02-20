const { execSync } = require("child_process");
const fs = require("fs");

const exportFile = "./data-import/export.tar.gz";

if (fs.existsSync(exportFile)) {
  try {
    console.log("Importando datos...");
    execSync(`npx strapi import --file ${exportFile} --force`, { stdio: "inherit" });
    console.log("Importación completada.");
  } catch (error) {
    console.log("Error al importar:", error.message);
  }
} else {
  console.log("No se encontró archivo de importación. Continuando...");
}
