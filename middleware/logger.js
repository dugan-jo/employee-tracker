const moment = require('moment');

const logger = (req, res, next) => {
    // req.protocol = http
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment()}`);

    next()
}

module.exports = logger;