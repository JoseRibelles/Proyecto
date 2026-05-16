const { execSync } = require("child_process");
const fs = require("fs");

const exportFile = "./data-import/export.tar.gz.tar.gz.enc";

if (fs.existsSync(exportFile)) {
  try {
    console.log("Importando datos...");
    execSync(`pnpm strapi import --file ${exportFile} --key Millet2024!`, { stdio: "inherit" });
    console.log("Importación completada.");
  } catch (error) {
    console.log("Error al importar:", error.message);
  }
} else {
  console.log("No se encontró archivo de importación. Continuando...");
}
