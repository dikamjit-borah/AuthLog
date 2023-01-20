const jwt = require("jsonwebtoken")
const serviceAuth = require("../services/service.auth")
const { hashPassword, validatePassword } = require("../helpers/helper.auth")
const { sendError, sendResponse } = require("../utils/response.handler")

module.exports = {
    signUp: async function (req, res) {
        try {
            const body = { name, email, password, age, address } = { ...req.body }

            const getUser = await serviceAuth.getUser(email)
            if (getUser) return sendResponse(res, 400, "User already exists")

            const hashedPassword = await hashPassword(password)
            const details = { ...body, password: hashedPassword }

            const saveUser = await serviceAuth.saveUser(details)
            if (saveUser) return sendResponse(res, 201, "Sign up successful!", { user_id: saveUser._id })

            return sendError(res, null, "Sign up failed!")
        } catch (error) {
            console.log(error);
            return sendError(res, error)
        }
    },

    logIn: async function (req, res) {
        try {
            const { email, password } = { ...req.body }

            const getUser = await serviceAuth.getUser(email)
            if (!getUser) return sendResponse(res, 404, "User does not exist")

            const validPassword = validatePassword(password, getUser.password)
            if (!validPassword) return sendResponse(res, 401, "Invalid credentials")

            const accessToken = jwt.sign(
                {
                    id: getUser._id,
                    age: getUser.age,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: 86400,
                }
            );

            return sendResponse(res, 200, "Log in successful", { accessToken })

        } catch (error) {
            console.log(error);
            return sendError(res, error)
        }
    },
}