const bcrypt = require('bcrypt')

module.exports = {
    async hashPassword(password) {
        const SALT = bcrypt.genSaltSync()
        return bcrypt.hash(password, SALT)
    }
}