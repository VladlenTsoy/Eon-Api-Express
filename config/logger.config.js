const {createLogger, format, transports} = require('winston')
const { combine, timestamp, prettyPrint } = format;

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'logs/logfile.log'}),
        new transports.File({filename: 'logs/error.log', level: 'error'}),
    ]
});

module.exports = {logger}