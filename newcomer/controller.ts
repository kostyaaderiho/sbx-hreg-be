import { Request, Response } from 'express';

import { NewcomerService } from './service';

export const create = async ({ body, file }: Request, res: Response) => {
    const newcomerService = new NewcomerService();
    const newcomer = await newcomerService.create(body, file!.path);

    res.send(newcomer);
};

export const getById = async ({ params }: Request, res: Response) => {
    const newcomerService = new NewcomerService();
    const newcomer = await newcomerService.getById(params['id']);

    res.json(newcomer);
};

export const get = async ({ query }: Request, res: Response) => {
    const newcomerService = new NewcomerService();
    const newcomers = await newcomerService.get(query);

    res.json(newcomers);
};

export const update = async (
    { params, body, file }: Request,
    res: Response
) => {
    const newcomerService = new NewcomerService();
    const newcomer = await newcomerService.update(params['id'], body, file);

    res.json(newcomer);
};

export const updateList = async ({ body }: Request, res: Response) => {
    const newcomerService = new NewcomerService();
    const newcomers = await newcomerService.updateList(body);

    res.json(newcomers);
};

export const destroy = async ({ params }: Request, res: Response) => {
    const newcomerService = new NewcomerService();

    await newcomerService.destroy({ id: params['id'] });

    res.send({ id: params['id'] });
};
