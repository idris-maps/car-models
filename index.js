const models = require('./models.json')

exports.all = () => models
exports.random = () => models[Math.floor(Math.random() * models.length)]

