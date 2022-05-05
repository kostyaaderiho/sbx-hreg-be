import { Request, Response } from 'express';

import { MESSAGES } from '../constants';

export const handleError = (
    { status, message }: { status: number; message: string },
    req: Request,
    res: Response
) => {
    res.status(status || 500).send({
        error: {
            status: status || 500,
            message: message || MESSAGES['500']
        }
    });
};
