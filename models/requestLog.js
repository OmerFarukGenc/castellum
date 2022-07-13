const mongoose = require("mongoose");

const requestLogSchema = new mongoose.Schema({
    reqData:{type:Object}
})

module.exports = mongoose.model("RequestLog",requestLogSchema);