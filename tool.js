var cheerio = require('cheerio')
function getTemp(html){
    var root = cheerio .load(html)
    return root('.now').find('b').text()
}
function getWeather(html){
    var root = cheerio.load(html)
    var weathers = root('.tbg')
    var weatherData = []
    weathers.each(function(i){
        var weathers = root(this)
        var date = weathers.find('h3 > b').text()
        var temp = weathers.find('.temp').text()
        var cloud = weathers.find('li').eq(3).text()
        weatherData.push({
            date : date,
            weather : temp,
            cloud : cloud
        })
    })
    return weatherData
}

exports.getTemp = getTemp
exports.getWeather = getWeather
