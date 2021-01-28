const sql = require('mssql')

(async () => {
    try {
        await sql.connect('mssql://sa:lfrlsa#123@localhost:4111/webdata')
        const result = await sql.query`insert into weather (temp,day1date,day1weather,day1cloud)values(9 ,'12月02日' ,'霾  4~13℃' ,'西北风 2级')`
        console.log(result)
    } catch (err) {
        // ... error checks
    }
})()
