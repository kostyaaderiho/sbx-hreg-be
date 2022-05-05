import mongoose from 'mongoose';

import { Recognition } from './types';

const schema = new mongoose.Schema<Recognition>({
    recognitionGroupId: String,
    personalMessage: String,
    createdDate: Number,
    nominator: String,
    category: Number,
    position: String,
    fullName: String,
    country: String,
    message: String,
    status: String,
    photo: String,
    title: String,
    id: String
});

export const RecognitionModel = mongoose.model<Recognition>(
    'v1_recognition',
    schema
);
