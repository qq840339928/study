exports.bodyParser = function (req,res,next) {
    return function () {
        let str = ''
        req.on('data', function (data) {
            str += data
        })
        req.on('end', function () {
        }) 
    }
}