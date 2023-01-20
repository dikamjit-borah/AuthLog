
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.set('debug', true); //to log mongoose queries
    mongoose.set("strictQuery", true); // to save only the fields that are specified in schema
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const _connection = mongoose.connection

    _connection.on("error", (err) => {
        console.log(err);
    })

    _connection.on("open", () => {
        console.log("Connected to Atlas");
    })
}