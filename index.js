console.log('Loading function');

var aws = require('aws-sdk');
var dynamo = new aws.DynamoDB({region: 'us-west-2'});

exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    
    dynamo.putItem({"TableName":"speedtest",
        "Item":{
            "bucket":{"S":"hoge"},
            "key":{"S":"fuga"}
        }
        
    }, function(err, data) {
        if(err) {
            console.log(err);
        } else { 
            console.log("data uploaded successfully," + data);
            context.done();
        }
    });
    
};
