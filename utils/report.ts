import Excel from 'exceljs';

import { RECOGNIZE_CATEGORY, Recognition } from '../recognition';

export const recognitionReport = (recognitions: Recognition[]) => {
    let workbook = new Excel.Workbook();
    let sheet = workbook.addWorksheet('Recognitions.');

    sheet.columns = [
        {
            header: 'Category',
            key: 'category',
            width: 20,
            style: {
                alignment: {
                    wrapText: true
                }
            }
        },
        {
            header: 'Nominator',
            key: 'nominator',
            width: 20,
            style: {
                alignment: {
                    wrapText: true
                }
            }
        },
        {
            header: 'Nominee',
            key: 'nominee',
            width: 20,
            style: {
                alignment: {
                    wrapText: true
                }
            }
        },
        {
            header: 'Title',
            key: 'title',
            width: 30,
            style: {
                alignment: {
                    wrapText: true
                }
            }
        },
        {
            header: 'Message',
            key: 'message',
            width: 40,
            style: {
                alignment: {
                    wrapText: true
                }
            }
        },
        {
            header: 'Date',
            key: 'date',
            width: 25,
            style: {
                alignment: {
                    wrapText: true
                }
            }
        }
    ];

    sheet.getCell('A1').font = {
        bold: true
    };

    sheet.getCell('B1').font = {
        bold: true
    };

    sheet.getCell('C1').font = {
        bold: true
    };

    sheet.getCell('D1').font = {
        bold: true
    };

    sheet.getCell('E1').font = {
        bold: true
    };

    sheet.getCell('F1').font = {
        bold: true
    };

    recognitions.forEach(
        ({ category, nominator, fullName, title, message, createdDate }) => {
            sheet.addRow({
                category: RECOGNIZE_CATEGORY[category],
                nominator,
                nominee: fullName,
                title,
                message,
                date: new Date(createdDate).toLocaleDateString('ru', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            });
        }
    );

    return workbook;
};
