var http = require('http');
function getpageAsync(url) {
    return new Promise(function(resolve, reject) {
        http.get(url, function(res) {
            var html = '';
            res.on('data', function(data) {
                html += data;
            });
            res.on('end', function() {
                resolve(html)

                // printCourseInfo(courseData);
            }).on('error', function(e) {
                reject(e);
                console.log('获取课程数据出错');
            });
        });
    });
}

exports.getpageAsync = getpageAsync
