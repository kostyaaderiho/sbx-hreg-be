import { Request, Response } from 'express';

import { recognitionReport } from '../utils/report';
import { EntityStatus } from '../types';
import { RecognitionExcelService } from '.';

export const get = async ({ query }: Request, res: Response) => {
    const { status }: { status?: EntityStatus } = query;

    const recognitionExcelService = new RecognitionExcelService();

    const recognitions = await recognitionExcelService.get({ status });

    res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
        'Content-Disposition',
        'attachment; filename=' + 'Report.xlsx'
    );

    await recognitionReport(recognitions).xlsx.write(res);

    res.end();
};
