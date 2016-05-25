var mqtt = require('mqtt')

var client = mqtt.createClient(1884, 'localhost', {
	clientId: 'bruno_test2',
	username: 'lasse',
	password: 'lassemqtt' 
});

//client.subscribe('presence');
console.log('Client publishing.. ');
client.publish('/mcu/comandos/', "OFF");
client.end();