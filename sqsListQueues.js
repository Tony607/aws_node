var AWS = require('aws-sdk');
// Create an S3 client
var sqs = new AWS.SQS({region:"us-east-1"});

var params = {
  QueueNamePrefix: 'yun'
};
sqs.listQueues(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});