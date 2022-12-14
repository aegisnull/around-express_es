const usersRouter = require("express").Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/", createUser);
usersRouter.patch("/me", updateProfile);
usersRouter.patch("/me/avatar", updateAvatar);

module.exports = usersRouter;
