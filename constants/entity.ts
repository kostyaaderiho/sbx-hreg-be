import { EntityStatus } from '../types';

export const ENTITY_STATUS: Record<EntityStatus, EntityStatus> = {
    pending: 'pending',
    approved: 'approved',
    archived: 'archived'
};
