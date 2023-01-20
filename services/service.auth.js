const { User } = require("../schemas/schema.user")

module.exports = {
    saveUser: async function (details) {
        try {
            return await new User(details).save()
        } catch (error) {
            throw new Error(error.message)
        }
    },

}