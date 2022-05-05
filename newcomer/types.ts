import { Document } from 'mongoose';

export type Newcomer = {
    selfIntroduction: string;
    isSubmitted: boolean;
    createdDate: number;
    department: string;
    telescope: string;
    fullName: string;
    position: string;
    linkedin: string;
    country: string;
    status: string;
    github: string;
    dribbble: string;
    telegram: string;
    behance: string;
    heroes: string;
    skype: string;
    photo: string;
    id: string;
};

export type NewcomerDocument = Document & Newcomer;
