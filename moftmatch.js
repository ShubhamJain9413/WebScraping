const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score"
request(url,cb);
console.log("Before");
function cb(err,response,html){
    if(err){
        console.log(err);
    }else {
        extractHTML(html);
    }
}
function extractHTML(html){
    let $ = cheerio.load(html);
   let elemsArr = $(".best-player-name>a");
   console.log(elemsArr.length);
   let text = $(elemsArr[0]).text();
   let htmldata = $(elemsArr[0]).html();
   console.log("text data" , text);
  // console.log("html data",htmldata);
}