const express = require("express");

const { PORT = 3000 } = process.env;
const app = express();

const usersRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

app.use("/", cardRouter);
app.use("/", usersRouter);

// set route for Non-existent address or localhost:3000
app.use("/", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
