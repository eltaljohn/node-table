const { crearArchivo } = require("./helpers/multiplicar");
require("colors");
const argv = require("./config/yargs");

console.clear();
// console.log(argv);

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);

crearArchivo(argv.base, argv.list, argv.h)
  .then((archivo) => console.log(archivo.rainbow, " creado"))
  .catch((err) => console.error(err));
