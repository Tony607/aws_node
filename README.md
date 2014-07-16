# AWS SDK for Node.js Sample Project

A simple Node.js application illustrating usage of the AWS SDK for Node.js.

## Requirements

The only requirement of this application is the Node Package Manager. All other
dependencies (including the AWS SDK for Node.js) can be installed with:

    npm install

## Basic Configuration

You need to set your AWS security credentials before the sample is able to
connect to AWS. The SDK will automatically pick up credentials in environment
variables:

    export AWS_ACCESS_KEY_ID="Your AWS Access Key ID"
    export AWS_SECRET_ACCESS_KEY="Your AWS Secret Access Key"

See the [Security Credentials](http://aws.amazon.com/security-credentials) page.
It's also possible to configure your credentials via a configuration file or
directly in source. See the AWS SDK for Node.js [Developer Guide](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/configuring.html)
for more information.

## Running the S3 sample

This sample application connects to Amazon's [Simple Storage Service (S3)](http://aws.amazon.com/s3),
creates a bucket, and uploads a file to that bucket. The script will automatically
create the file to upload. All you need to do is run it:

    node sample.js

The S3 documentation has a good overview of the [restrictions for bucket names](http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html)
for when you start making your own buckets.

## License

This sample application is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

