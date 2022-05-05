import { Request, Response } from 'express';

import { RecognitionService } from './';

export const create = async ({ body }: Request, res: Response) => {
    const recognitionService = new RecognitionService();
    const recognitions = await recognitionService.createList(body);

    res.json(recognitions);
};

export const getById = async ({ params }: Request, res: Response) => {
    const recognitionService = new RecognitionService();
    const recognition = await recognitionService.getById(params['id']);

    res.json(recognition);
};

export const get = async ({ query }: Request, res: Response) => {
    const recognitionService = new RecognitionService();
    const recognitions = await recognitionService.get(query);

    res.json(recognitions);
};

export const update = async (
    { params, body, file }: Request,
    res: Response
) => {
    const recognitionService = new RecognitionService();
    const recognition = await recognitionService.update(
        params['id'],
        body,
        file
    );

    res.json(recognition);
};

export const updateList = async ({ body }: Request, res: Response) => {
    const recognitionService = new RecognitionService();
    const recognitions = await recognitionService.updateList(body);

    res.send(recognitions);
};

export const destroy = async ({ params }: Request, res: Response) => {
    const recognitionService = new RecognitionService();
    await recognitionService.destroy({ id: params['id'] });

    res.send({ id: params['id'] });
};
