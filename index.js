console.log('Loading function');

var aws = require('aws-sdk');
var dynamo = new aws.DynamoDB({region: 'us-east-1'});
var uuid = require('node-uuid');

exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));

    dynamo.putItem({"TableName":"speedtest",
        "Item":{
            "id": {
                "S": uuid.v4()
            },
            "url": {
                "S": event.url
            },
            "time": {
                "N": event.time
            },
            "latitude": {
                "S": event.latitude
            },
            "longitude": {
                "S": event.longitude
            },
            "device_model": {
                "S": event.device_model
            },
            "system_version": {
                "S": event.system_version
            },
            "carrier_name": {
                "S": event.carrier_name
            },
            "mobile_country_code": {
                "N": event.mobile_country_code
            },
            "mobile_network_code": {
                "N": event.mobile_network_code
            },
            "iso_country_code": {
                "S": event.iso_country_code
            },
            "use_wifi": {
                "N": event.use_wifi
            },
            "created_at": {
                "N": Math.floor( new Date().getTime() / 1000 )
            }
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
