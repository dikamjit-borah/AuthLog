const serviceAuth = require("../services/service.auth")

module.exports = {
    signUp: async function (req, res) {
        try {
            const details = { name, email, password, age, address } = { ...req.body }
            const saveUser = await serviceAuth.saveUser(details)
            if (saveUser) res.send("sign up success")

        } catch (error) {
            console.log(error);
            res.send("sign up failed")

        }
    },

    logIn: async function (req, res) {
        try {
            res.send("login success")

        } catch (error) {
            res.send("login  error")
        }
    },

}