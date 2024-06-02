const ExcelJS = require('exceljs');

async function excelManipulate(searchWord, replaceWord, change, filePath)
{
const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile(filePath);
const worksheet = workbook.getWorksheet('Sheet1');
result = await readExcelManipulate(worksheet, searchWord)
const cell = worksheet.getCell(result.row, result.column+change.colChange);
cell.value = replaceWord ;
await workbook.xlsx.writeFile(filePath);
}

async function readExcelManipulate(worksheet, searchWord)
{
    let result = {row:-1, column:-1};
    worksheet.eachRow((row, rowNumber) =>
{
    row.eachCell((cell, colNumber) =>
    {
        if (cell.value === searchWord)
        {
            result.row = rowNumber;
            result.column = colNumber;
        }
    })
})
return result;
}

// excelManipulate('Mango', "King", '/Users/saikrishnamj/Downloads/excelTest.xlsx');

//update the price of King to 1500 by introducing a change in column traveseral 
excelManipulate("King", 1500 , {rowChange:0, colChange:2}, '/Users/saikrishnamj/Downloads/excelTest.xlsx');