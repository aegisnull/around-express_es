const usersRouter = require("express").Router();
const fsPromises = require("fs").promises;
const { resolvePtr } = require("dns");
const path = require("path");

const usersPath = path.join(__dirname, "../data/users.json");

usersRouter.get("/users", (req, res) => {
  fsPromises
    .readFile(usersPath, { encoding: "utf8" })
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      console.log(err);
    });
});

usersRouter.get("/users/:_id", (req, res) => {
  const { _id } = req.params;
  const user = require("../data/users.json").find((user) => user._id === _id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "ID de usuario no encontrado" });
  }
});

module.exports = usersRouter;
