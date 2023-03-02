const fs = require("fs");

//Modulo que nos servirá para modificar el archivo DB.json  que simula una base de datos
const saveToDatabase = (DB) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = { saveToDatabase };
