import express from 'express';
import path from 'path';
import cors from 'cors';

import { route as recognitionExcelRoute } from '../excel/route';
import { route as recognitionRoute } from '../recognition/route';
import { route as newcomerRoute } from '../newcomer';
import { logErrors, handleError } from '../middlewares';
import { MESSAGES } from '../constants';

export const init = () => {
    const app = express();

    app.use('/uploads', express.static(path.join(process.cwd(), '/uploads')));
    app.use(express.json());
    app.use(cors());

    app.use('/api/newcomers/', newcomerRoute);
    app.use('/api/recognitions/', recognitionRoute);
    app.use('/api/recognitionsExcel/', recognitionExcelRoute);

    app.use((req, res, next) => {
        next({
            status: 404,
            message: MESSAGES['404']
        });
    });
    app.use(logErrors);
    app.use(handleError);

    return app;
};
