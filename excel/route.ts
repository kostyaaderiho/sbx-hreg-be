import { Router } from 'express';

import { catchError } from '../decorators';
import { get } from '.';

const route = Router();

route.get('/', catchError(get));

export { route };
