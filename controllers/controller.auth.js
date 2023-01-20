module.exports = {
    signUp: async function (req, res) {
        try {
            res.send("sign up success")

        } catch (error) {
            res.send("sign up error")
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