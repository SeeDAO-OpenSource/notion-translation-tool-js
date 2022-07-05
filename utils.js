export function getTableData(res) {
    const table = [];
    res.results.forEach((row) => {
        const cells = [];
        titles.forEach((title) => {
            if (row.properties[title]['rich_text'] !== undefined) {
                cells.push(row.properties[title].rich_text[0] !== undefined ? row.properties[title].rich_text[0] : {});
            }
            else if (row.properties[title]['title'] !== undefined) {
                cells.push(row.properties[title].title[0] !== undefined ? row.properties[title].title[0] : {});
            }
        })
        table.push(cells);
    })
    return table;
}
