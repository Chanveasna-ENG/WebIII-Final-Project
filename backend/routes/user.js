const express = require("express")

const router = express.Router()
const userController = require("../controllers/userController")

router.route("/")
    .get(userController.getUsers)
    .post(userController.createUser)

router.route("/:id")
    .get(userController.getUser)
    .put(userController.updateUserFull)
    .patch(userController.updateUserPartial)
    .delete(userController.removeUser)

module.exports = router
