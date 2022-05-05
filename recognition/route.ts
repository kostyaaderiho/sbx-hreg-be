import { Router } from 'express';
import multer from 'multer';

import { updateList, get, destroy, update, create, getById } from './';
import { catchError } from '../decorators';

/**
 * Store files configuration
 * multer is the middleware that responsible of uploading files into disk
 *
 * See: https://www.npmjs.com/package/multer
 */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });
const route = Router();

route.post('/', catchError(create));
route.get('/:id', catchError(getById));
route.get('/', catchError(get));
route.put('/:id', upload.single('photo'), catchError(update));
route.put('/', upload.single('photo'), catchError(updateList));
route.delete('/:id', catchError(destroy));

export { route };
