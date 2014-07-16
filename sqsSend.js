var AWS = require('aws-sdk');
// Create an S3 client
var sqs = new AWS.SQS({region:"us-east-1"});

var params = {
  MessageBody: 'FFKK', // required
  QueueUrl: 'https://sqs.us-east-1.amazonaws.com/099437598772/yun', // required
  DelaySeconds: 0,
  MessageAttributes: {
    someKey: {
      DataType: 'String', // required
      StringValue: 'thisisisi'
    },
  }
};
sqs.sendMessage(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});