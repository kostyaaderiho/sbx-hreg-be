import { v4 as uuidv4 } from 'uuid';

import { QueryParamsType } from '../types';
import { ENTITY_STATUS } from '../constants';
import { decodeQueryParams } from '../utils';

import { NewcomerModel, Newcomer } from './';

export class NewcomerService {
    model: typeof NewcomerModel;

    constructor(model = NewcomerModel) {
        this.model = model;
    }

    create(newcomer: Newcomer, photoPath: string) {
        return new NewcomerModel({
            ...newcomer,
            createdDate: Date.now(),
            status: ENTITY_STATUS.pending,
            photo: photoPath,
            department: '',
            id: uuidv4()
        }).save();
    }

    getById(id: string) {
        return this.model.findOne({ id }, { _id: 0, __v: 0 });
    }

    get({ country, limit = 0, offset = 0, status, sort }: QueryParamsType) {
        const findParams = {
            ...(country ? { country } : {}),
            ...(status ? { status } : {})
        };
        const sortParams = sort ? decodeQueryParams(sort) : {};

        return this.model
            .find(findParams)
            .sort(sortParams)
            .limit(+limit)
            .skip(+offset);
    }

    async update(
        id: Newcomer['id'],
        updates: Newcomer,
        file: Express.Multer.File | undefined
    ) {
        await this.model.updateOne(
            { id },
            {
                ...updates,
                ...(file ? { photo: file.path } : {})
            },
            {
                returnOriginal: false
            }
        );

        return this.getById(id);
    }

    destroy({ id }: { id: string }) {
        return this.model.deleteOne({ id });
    }

    async updateList(newcomers: Newcomer[]) {
        let bulUpdateOps: Array<Object> = [];

        newcomers.forEach((newcomer: Newcomer) => {
            bulUpdateOps.push({
                updateOne: {
                    filter: { id: newcomer.id },
                    update: { $set: { status: ENTITY_STATUS.archived } }
                }
            });
        });

        await this.model.bulkWrite(bulUpdateOps);

        return newcomers;
    }
}
