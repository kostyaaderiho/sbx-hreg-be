import { Router } from 'express';
import multer from 'multer';
import fs from 'fs';

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
        const PATH = './uploads/';

        fs.mkdirSync(PATH, { recursive: true });

        cb(null, PATH);
    },
    filename: (req, file, cb) => {
        let { originalname, mimetype } = file;
        cb(null, `${originalname}.${mimetype.split('/')[1]}`);
    }
});
const upload = multer({ storage });
const route = Router();

route.post('/', upload.single('photo'), catchError(create));
route.get('/', catchError(get));
route.get('/:id', catchError(getById));
route.put('/:id', upload.single('photo'), catchError(update));
route.put('/', upload.single('photo'), catchError(updateList));
route.delete('/:id', catchError(destroy));

export { route };
