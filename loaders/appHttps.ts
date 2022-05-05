import { Application } from 'express';
import path from 'path';
import fs from 'fs';
import https from 'https';
import dotenv from 'dotenv';

const ENV_FILE_PATH = path.resolve(__dirname, '../config/', '.env');

export const appHttps = (app: Application) => {
    let httpsServer;

    dotenv.config({ path: ENV_FILE_PATH });

    const key = process.env['KEY'];
    const cert = process.env['CERT'];

    if (key && cert) {
        httpsServer = https.createServer(
            {
                key: fs.readFileSync(key, 'utf8'),
                cert: fs.readFileSync(cert, 'utf8')
            },
            app
        );
    }

    return httpsServer;
};
