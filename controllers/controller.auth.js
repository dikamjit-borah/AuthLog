const serviceAuth = require("../services/service.auth")
const { sendError, sendResponse } = require("../utils/response.handler")

module.exports = {
    signUp: async function (req, res) {
        try {
            const details = { name, email, password, age, address } = { ...req.body }

            const getUser = await serviceAuth.getUser(email)
            if (getUser) return sendResponse(res, 400, "User already exists")

            const saveUser = await serviceAuth.saveUser(details)
            if (saveUser) return sendResponse(res, 201, "Sign up successful!", { user_id: saveUser._id })

            sendError(res, null, "Sign up failed!")


        } catch (error) {
            console.log(error);
            sendError(res, error)
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