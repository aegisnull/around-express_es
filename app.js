const express = require("express");
const moongose = require("mongoose");

const { PORT = 3000 } = process.env;
const app = express();

moongose.connect("mongodb://localhost:27017/aroundb", {
  .then(() => {
    console.log("Conectado a la base de datos correctamente");
  })
  .catch((err) => {
    console.log("Error al conectarse a la base de datos", err);
  });
});

const usersRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

app.use("/", cardRouter);
app.use("/users", usersRouter);

// set route for Non-existent address or localhost:3000
app.use("/", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
