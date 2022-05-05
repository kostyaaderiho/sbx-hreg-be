import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

export const envInit = () => {
    const ENV_PATH = path.join(process.cwd(), '.env');

    if (fs.existsSync(ENV_PATH)) {
        dotenv.config({ path: ENV_PATH });
    }
};
