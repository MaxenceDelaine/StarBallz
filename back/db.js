const sqlite = require('sqlite')

module.exports = sqlite.open('./database.sqlite', { Promise })

