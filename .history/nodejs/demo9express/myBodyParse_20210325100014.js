exports.bodyParser = function (req,res,next) {
    req.on('data', function (data) {
        str += data
    })
    req.on('end', function () {
        str += data
    })
}