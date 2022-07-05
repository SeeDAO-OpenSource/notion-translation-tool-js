require('dotenv').config()
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

  (async () => {

    const pagePropMap = {};
    const NOTION_DB_ID =
    ['3ae1f9fd920340648c0c111ef0588c46',
    '83c2c19f501948409394817f554d1496',
    'c459492c67dd44078f99b51dd6d4b337',
    '5aa5c9d0feba487db71cedf556a6dd8d',
    '486161b6366f4664ad2088668c1a7cfa',
    'a75f4fcfed0948b1a38d4e4d05c5ef21',
    '22f1be53870b46edb3ebafcd85a0b237',
    'f53383141c274af7a8313175e9fc4b8d',
    'fee6d5ba219f4ac6bf04584ad03b6419',
    'a000065a8aee4e568a2e01e8c14b5631',
    '4e72caa49d37492bbf2c4665ff4400b7'  
    ];
   
    for(pos=0;pos< NOTION_DB_ID.length;pos++){
      const pageDataQuery = await notion.databases.query({
        database_id: NOTION_DB_ID[pos],
      });
      const pageData = pageDataQuery.results;
  
     
     for(i=0;i<pageData.length;i++){
      const pageProp = pageData[i].properties['状态'].select;
      const selectProperty = pageProp != null? pageProp.name : 'null';
      if(selectProperty != 'null'){
        if(pagePropMap[selectProperty] != undefined){
          pagePropMap[selectProperty]++;
        }else{
          pagePropMap[selectProperty] = 1;
        }
      }
     }
    }
     console.log(pagePropMap);
    

  })();