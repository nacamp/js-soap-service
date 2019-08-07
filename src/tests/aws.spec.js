'use strict';
import dotenv from 'dotenv';
import AWS from 'aws-sdk';

dotenv.config();

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
  sqsUrl: process.env.SQS_URL,
});

// sqs
const sqs = new AWS.SQS();
const params = {
  DelaySeconds: 10,
  MessageAttributes: {
    'Title': {
      DataType: 'String',
      StringValue: 'The Whistler',
    },
    'Author': {
      DataType: 'String',
      StringValue: 'John Grisham',
    },
    'WeeksOn': {
      DataType: 'Number',
      StringValue: '6',
    },
  },
  MessageBody: 'Information about current NY Times fiction bestseller for week of 12/11/2016.',
  QueueUrl: process.env.SQS_URL,
};

const sendMessage = (params) => {
  return new Promise((resolve, reject) => {
    sqs.sendMessage(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

(async function() {
  try {
    const data = await sendMessage(params);
    console.debug(data);
  } catch (e) {
    console.log(e);
  }
  console.log('end#############');
})()
/*
async
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/async_function
sdk
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
sdk/sqs 설명
https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v2/developer-guide/sqs-examples-send-receive-messages.html
example
https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascript/example_code/sqs/sqs_sendmessage.js
*/
