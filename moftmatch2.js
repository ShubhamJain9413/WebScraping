const request = require('request');
const cheerio = require('cheerio');

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score', function (error, response ,html) {
if(error){  
console.error('error:', error); 
  // Print the error if one occurred
}
else{
  extractHTML(html);
}
});
function extractHTML(html){
  let selectorTool = cheerio.load(html);
    let statsArr = selectorTool(".best-player-name");
    console.log(statsArr.length);
    for(let i =0;i<statsArr.length;i++){
        let data = selectorTool(statsArr[i]).text();
        console.log(data);
    }
  
}