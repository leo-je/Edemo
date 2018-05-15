var Eureka = require('eureka-client').Eureka;
console.log("start Eureka Service");
const client = new Eureka({
    instance: {
        app: 'PhoneQ',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:3000',
        port: {
            '$': 3000,
            '@enabled': 'true',
        },
        vipAddress: 'test.something.com',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        serviceUrl: ['http://admin:111111@localhost:9090/eureka/apps/'],
    },
});
client.start(function(error) {
    console.log(error || 'Node server register completed');
});

module.exports=client;