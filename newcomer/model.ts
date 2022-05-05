import mongoose from 'mongoose';

import { Newcomer } from './';

const newcomerSchema = new mongoose.Schema<Newcomer>({
    selfIntroduction: String,
    isSubmitted: Boolean,
    createdDate: Number,
    department: String,
    telescope: String,
    position: String,
    fullName: String,
    linkedin: String,
    country: String,
    status: String,
    github: String,
    dribbble: String,
    telegram: String,
    behance: String,
    heroes: String,
    photo: String,
    skype: String,
    id: String
});

export const NewcomerModel = mongoose.model<Newcomer>(
    'v1_newcomer',
    newcomerSchema
);
