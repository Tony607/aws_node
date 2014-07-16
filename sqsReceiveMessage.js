var AWS = require('aws-sdk');
// Create an S3 client
var sqs = new AWS.SQS({
		region : "us-east-1"
	});

var params = {
	QueueUrl : 'https://sqs.us-east-1.amazonaws.com/099437598772/yun', // required
	MaxNumberOfMessages : 10
};

function printMsgBody(element, index, array) {
    console.log("a[" + index + "] = " + element.Body);
}
sqs.receiveMessage(params, function (err, data) {
	if (err)
		console.log(err, err.stack); // an error occurred
	else {
		data.Messages.forEach(printMsgBody);
	} // successful response
});
