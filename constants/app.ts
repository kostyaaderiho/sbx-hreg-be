import { Env } from '../types';

export const ENV: Record<Env, Env> = {
    develop: 'develop',
    production: 'production'
};

export const APP_PORT = process.env['PORT'] || 3000;
