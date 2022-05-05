import { Document } from 'mongoose';

export type Recognition = {
    recognitionGroupId: string;
    personalMessage: string;
    createdDate: number;
    nominator: string;
    category: number;
    position: string;
    fullName: string;
    country: string;
    message: string;
    status: string;
    photo: string;
    title: string;
    id: string;
};

export type RecognitionDocument = Document & Recognition;
