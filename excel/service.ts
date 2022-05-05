import { EntityStatus } from '../types';
import { RecognitionModel } from '../recognition/model';

export class RecognitionExcelService {
    get({ status }: { status?: EntityStatus }) {
        return RecognitionModel.find(
            { status },
            {
                _id: 0,
                _v: 0
            }
        );
    }
}
