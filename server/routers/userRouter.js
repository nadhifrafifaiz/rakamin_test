const express = require("express")
const { userController } = require("../controllers")
const router = express.Router()

router.post("/user", userController.AddUser)

module.exports = router