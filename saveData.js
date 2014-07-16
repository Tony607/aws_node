// Load the SDK and UUID
var AWS = require('aws-sdk');
var fs = require('fs');
var uuid = require('node-uuid');

// Create an S3 client
var s3 = new AWS.S3();
// Create a bucket and upload something into it
var bucketName = 'node-sdk-sample-ff7562fb-c5f2-43a2-ac9d-de73d535225e';
var keyName = 'photoX.jpg';

var params = {Bucket: bucketName, Key: keyName, Body: ''};

fs.readFile('photo1.jpg', function (err, data) {
		var afterPut = function(err,data){
			if (err)
			  console.log(err)
			else
			  console.log("Successfully uploaded data!");
		};
	  if (err) {
		return console.log(err);
	  } else {
		console.log("readFile-success");
		params.Body = data;
		s3.putObject(params, afterPut);
	  }
		
});



// s3.createBucket({Bucket: bucketName}, function() {
  // var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
  // s3.putObject(params, function(err, data) {
    // if (err)
      // console.log(err)
    // else
      // console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  // });
// });
