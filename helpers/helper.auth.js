const bcrypt = require('bcrypt')

module.exports = {
    hashPassword: async function (password) {
        const SALT = bcrypt.genSaltSync()
        return bcrypt.hash(password, SALT)
    },

    validatePassword: function (password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword)
    }
}