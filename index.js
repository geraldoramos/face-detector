const axios = require('axios')
const fs = require('fs')
const cv = require('opencv')

exports.detect = function(path, cb) {

  if (!/^(f|ht)tps?:\/\//i.test(path)) {
    cv.readImage(path, function(err, im) {
      im.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {
        cb(faces.length)
      });
    });
  } else {
    var filename = path.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    axios({
        method: 'get',
        url: path,
        responseType: 'stream'
      })
      .then(function(response) {

        var stream = response.data.pipe(fs.createWriteStream(filename))

        stream.on('finish', function() {
          cv.readImage(filename, function(err, im) {
            im.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {
              fs.unlink(filename, function(error) {
                if (error) {
                  cb('Unable to delete file')
                }
                cb(faces.length)
              })
            });
          });

        });
      });
  }



}
