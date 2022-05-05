import { v4 as uuidv4 } from 'uuid';

import { QueryParamsType } from '../types';
import { ENTITY_STATUS } from '../constants';
import { Recognition } from './types';
import { RecognitionModel } from './model';
import { decodeQueryParams } from '../utils';

export class RecognitionService {
    model: typeof RecognitionModel;

    constructor(model = RecognitionModel) {
        this.model = model;
    }

    getById(id: Recognition['id']) {
        return this.model.findOne({ id });
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
        id: Recognition['id'],
        updates: Recognition,
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

    destroy({ id }: Pick<Recognition, 'id'>) {
        return this.model.deleteOne({ id });
    }

    async updateList(recognitions: Recognition[]) {
        await this.model.bulkWrite(
            recognitions.map((recognition) => ({
                updateOne: {
                    filter: { id: recognition.id },
                    update: { $set: { status: ENTITY_STATUS.archived } }
                }
            }))
        );

        return recognitions;
    }

    async createList(recognitions: Recognition[]) {
        const createdDate = Date.now();
        const groupId = uuidv4();

        await this.model.create(
            recognitions.map((recognition) => ({
                ...recognition,
                createdDate,
                recognitionGroupId: groupId
            }))
        );

        return this.model.find({ createdDate }, { _id: 0, __v: 0 });
    }
}
