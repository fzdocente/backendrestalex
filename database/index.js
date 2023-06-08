const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/dbrestalex";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Conectado a la base de datos de MongoDB"))
    .catch((error) => console.error(error));
};

module.exports = db