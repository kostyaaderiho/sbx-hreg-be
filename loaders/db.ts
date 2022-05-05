import mongoose from 'mongoose';

import { Env, DBUri } from '../types';

import { ENV } from '../constants';

const ENV_DB_VAR: Record<Env, DBUri> = {
    develop: 'dbDevURI',
    production: 'dbProdURI'
};

export const db = () => {
    const env = (process.env['NODE_ENV'] as Env) || ENV.production;
    const dbURI = process.env[ENV_DB_VAR[env]];

    console.log(process.env['NODE_ENV']);

    if (!dbURI) {
        console.log(
            `dbURI is not provided, update .env file with ${ENV_DB_VAR[env]} property.`
        );
        process.exit();
    }

    mongoose.connect(dbURI, { useNewUrlParser: true }, () => {
        console.log(`Server is connected to ${dbURI}`);
    });
};
