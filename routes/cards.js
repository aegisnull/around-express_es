const cardsRouter = require("express").Router();
const fsPromises = require("fs").promises;
const path = require("path");

const cardsPath = path.join(__dirname, "../data/cards.json");

cardsRouter.get("/cards", (req, res) => {
  fsPromises
    .readFile(cardsPath, { encoding: "utf8" })
    .then((data) => {
      res.send(JSON.parse(data));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = cardsRouter;
