const { signUp, logIn } = require("../controllers/controller.auth");
const { validateWithJoi } = require("../middlewares/middleware.validations");
const { schemaSignUp } = require("../modules/joi/joi.schemas");

const router = require("express").Router();

router.post("/signUp", validateWithJoi(schemaSignUp), signUp);
router.get("/logIn", logIn)

module.exports = router;
