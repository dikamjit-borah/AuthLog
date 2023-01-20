const { signUp, logIn } = require("../controllers/controller.auth");

const router = require("express").Router();

router.post("/signUp", signUp);
router.get("/logIn", logIn)

module.exports = router;
