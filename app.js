const express = require("express");
const moongose = require("mongoose");

const { PORT = 3000 } = process.env;
const app = express();

moongose
  .connect("mongodb://localhost:27017/aroundb")
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.log(err));

const usersRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

app.use("/cards", cardRouter);
app.use("/users", usersRouter);

// set route for Non-existent address or localhost:3000
app.use("/", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.use((req, res, next) => {
  req.user = {
    _id: "6365a4f7bd579f1842394cc2", // pega el _id del usuario de prueba que creamos en el paso anterior
  };

  next();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
