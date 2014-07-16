var AWS = require('aws-sdk');
// Create an S3 client
var sqs = new AWS.SQS({
		region : "us-east-1"
	});

var params = {
	QueueUrl : 'https://sqs.us-east-1.amazonaws.com/099437598772/yun', // required
	MaxNumberOfMessages : 10
};

function printandDeleteMsg(element, index, array) {
	console.log("a[" + index + "] = " + element.Body);
	var deleparams = {
		Entries : [// required
			{
				Id : element.MessageId, // required
				ReceiptHandle : element.ReceiptHandle // required
			},
		],
		QueueUrl : 'https://sqs.us-east-1.amazonaws.com/099437598772/yun' // required
	};
	sqs.deleteMessageBatch(deleparams, function (err, data) {
		if (err)
			console.log(err, err.stack); // an error occurred
		else
			console.log(data); // successful response
	});
}
sqs.receiveMessage(params, function (err, data) {
	if (err)
		console.log(err, err.stack); // an error occurred
	else {
		if(data.Messages)
			data.Messages.forEach(printandDeleteMsg);
	} // successful response
});
