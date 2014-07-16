var AWS = require('aws-sdk');
var fs = require('fs');
// Create an S3 client
var s3 = new AWS.S3();

// Create a bucket and upload something into it
var bucketName;
var keyName = 'photoX.jpg';


  var params = {Bucket: 'node-sdk-sample-ff7562fb-c5f2-43a2-ac9d-de73d535225e', Key: keyName};
  s3.getObject(params, function(err, data) {
    if (err)
      console.log(err)
    else
      console.log(data);
  });
  var urlfile = 'url.txt';
  s3.getSignedUrl('getObject', params, function (err, url) {
	  fs.writeFile(urlfile, url, function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("The url was saved to "+ urlfile);
			}
		}); 
});

  