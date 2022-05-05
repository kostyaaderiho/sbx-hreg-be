import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label: lbl, timestamp: tmstmp }) => {
    return `${tmstmp} [${lbl}] ${level}: ${message}`;
});

export const logger = createLogger({
    format: combine(label({ label: 'Source:' }), timestamp(), myFormat),
    transports: [
        new transports.File({
            filename: 'info.log'
        })
    ]
});
