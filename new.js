const request = require('request');
const cheerio = require('cheerio');

const url = '';

request(url,cb);

function cb(err,response,html){
    if(err){
        console.log(err);
    }else{
        extractHTML(html);
    }
}
function extractHTML(html){
    let selectorTool = cheerio.load(html);
    let statsArr = selectorTool(".best-player-name");
}