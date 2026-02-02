// reset_admin.js
const strapi = require('@strapi/strapi');

async function main() {
  const app = await strapi();
  await app.start();

  const userService = strapi.service('admin::user');

  const email = 'joseribegar2004@gmail.com'; // tu email de admin
  const newPassword = '19Diciembre2004!' //tu nueva contraseña

  const adminUser = await userService.findOneByEmail(email);
  if (!adminUser) {
    console.log("No se encontró el usuario admin con ese email.");
    process.exit(1);
  }

  await userService.update(adminUser.id, { password: newPassword });
  console.log(`Contraseña cambiada correctamente para ${email}`);

  process.exit(0);
}

main();
