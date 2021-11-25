const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (number = 5, list = false, hasta) => {
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      consola += `${number} ${"x".green} ${i} ${"=".green} ${number * i}\n`;
      salida += `${number} x ${i} = ${number * i}\n`;
    }

    if (list) {
      console.log("=====================".green);
      console.log("   Tabla del:".green, colors.blue(number));
      console.log("=====================".green);

      console.log(consola);
    }
    await fs.writeFileSync(`./out/tabla-${number}.txt`, salida);
    return `tabla-${number}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
