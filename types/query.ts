import { EntityStatus } from './entity';

export type QuerySort = 'desc' | 'descending' | 'asc' | 'ascending';

export type QueryParamsType = {
    country?: string;
    limit?: number;
    offset?: number;
    status?: EntityStatus | '';
    sort?: string;
};
