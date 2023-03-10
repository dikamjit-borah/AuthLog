const { User } = require("../schemas/schema.user")

module.exports = {
    getUser: async function (email) {
        try {
            return await User.findOne({ email }, { email: 1, password: 1 })
        } catch (error) {
            throw new Error(error.message)
        }
    },
    saveUser: async function (details) {
        try {
            return await new User(details).save()
        } catch (error) {
            throw new Error(error.message)
        }
    },

}