import { APP_PORT } from './constants';
import { db, init, envInit } from './loaders';

envInit();

const app = init();

app!.listen(APP_PORT, () => {
    db();
    console.log(
        `Server is running on ${APP_PORT} in ${process.env['NODE_ENV']} mode.`
    );
});
