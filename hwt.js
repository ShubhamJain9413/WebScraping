const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard"
request(url,cb);
console.log("Before");
function cb(err,response,html){
    if(err){
        console.log(err);
    }else {
        extractHTML(html);
    }
}

function extractHTML(html) {
    let $ = cheerio.load(html);
    // full page search
    let teamArr = $(".match-info.match-info-MATCH .team");
    let wTeamName;
    for(let i = 0; i<teamArr.length;i++){
        let hasclass = $(teamArr[i]).hasClass("team-gray");
        if(hasclass == false) {
            let teamNameElem = $(teamArr[i]).find(".name");
            wTeamName = teamNameElem.text().trim();
        }
    }
    let innigsArr =  $(".card.content-block.match-scorecard-table>.Collapsible")
    let htmlStr = "";
    for(let i = 0;i<innigsArr.length;i++){
        // let cHtml = $(innigsArr[i]).html();
        // htmlStr += cHtml;
        let teamNameElem = $(innigsArr[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();

        let hwtName = "";
        let hwt = 0;
        
        if(wTeamName == teamName){
            //console.log(teamName);
            let tableElem = $(innigsArr[i]).find(".table.bowler");
            let allBowlers = $(tableElem).find("tr");
            for (let j = 0; j < allBowlers.length; j++) {
                let allColsOfPlayer = $(allBowlers[j]).find("td");
                let playerName = $(allColsOfPlayer[0]).text();
                let wickets = $(allColsOfPlayer[4]).text();
                if (wickets >= hwt) {
                    hwt = wickets;
                    hwtName = playerName;
                }
            }
            console.log(`Winning Team ${wTeamName} highest wicket Taker playerName: ${hwtName} wickets: ${hwt}`)
        }

    }
   // console.log(htmlStr);
}