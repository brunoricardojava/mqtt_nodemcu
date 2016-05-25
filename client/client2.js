var mqtt = require('mqtt')


var client = mqtt.createClient(1884, 'localhost', {
	clientId: 'bruno_test',
	username: 'lasse',
	password: 'lassemqtt' 
});

client.subscribe('testtopic/sensor1');

client.on('message', function(topic, message) {
console.log('%s',message);
});

console.log('Client started...');