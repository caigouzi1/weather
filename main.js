var getpageAsync = require('./getpageAsync')
var tool = require('./tool')
var db = require('./sql');
console.log("天气信息发送中")
function runloop() {
    var urlInfo = []
    urlInfo.push(getpageAsync.getpageAsync("http://www.tianqi.com/linfen/"))
    urlInfo.push(getpageAsync.getpageAsync("http://www.tianqi.com/linfen/15/"))
    Promise
    .all(urlInfo)   //all中必须传入为数组格式
    .then(function(pages){
        var tempInfo = tool.getTemp(pages[0])
        var weaInfo = tool.getWeather(pages[1])
        // console.log(tempInfo)
        // console.log(weaInfo)
        // insertsql = "insert into weather (temp,day1date,day1weather,day1cloud)values(" + tempInfo + ",'12月02日' ,'霾  4~13℃' ,'西北风 2级')"
        insertsql = "insert into weather (temp,day1date,day1weather,day1cloud,day2date,day2weather,day2cloud,day3date,day3weather,day3cloud)values(" + tempInfo + ", '"+ weaInfo[0].date + "','" + weaInfo[0].weather + "','" + weaInfo[0].cloud  + "','"+ weaInfo[1].date + "','" + weaInfo[1].weather + "','" + weaInfo[1].cloud  + "','"+ weaInfo[2].date + "','" + weaInfo[2].weather + "','" + weaInfo[2].cloud +"')"
        // console.log(insertsql)
        db.sql(insertsql, function () {
        }
    )
})
setTimeout(function(){
    runloop()
},1000 * 60 * 10)
}
runloop()
