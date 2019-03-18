/*
//var amiconfig = require('./config/amiConnector.json');
var amiConfig   =   require('config');

//var amii     =   amiconfig.get('asteriskConn');

const handlerClass  =   require('./lib/filter-req.js')


console.log(`welcome and started the script for the host address : ${amiConfig.get('asteriskConn.host')} for : ${amiConfig.get('asteriskConn.logcheck')}`);
var ami = new require('asterisk-manager')('5038', amiConfig.get('asteriskConn.host'),
 amiConfig.get('asteriskConn.user'), amiConfig.get('asteriskConn.password'), true);
if (ami != undefined) {
    try {
        ami.keepConnected();
        ami.on('userevent', function(event) {
               handlerClass.filterEventBasedRouting(event);
        });
    } catch (err) {
        console.log('Exception in AMI action : ' + err.message);
    }
} else {
    console.log('AMI connection failed, try to reconnect!');
    ami = new require('asterisk-manager')('5038', amiconfig.host, amiconfig.user, amiconfig.password, true);
}

*/
const handlerClass = require('./handlers/filter-req')
const moment = require('moment');

for (let i = 1; i < 2; i++) { 

let  toPass =   {
  event: 'UserEvent',
  privilege: 'user,all',
  channel: 'SIP/0435-00000158',
  channelstate: '6',
  channelstatedesc: 'Up',
  calleridnum: '478665511',
  calleridname: '478665517',
  connectedlinenum: '<unknown>',
  connectedlinename: '<unknown>',
  language: 'en',
  accountcode: '',
  context: 'voice_generic_entry',
  exten: 'vgentry',
  priority: '8',
  uniqueid: '1546909286.448',
  linkedid: '1546909286.448',
  userevent: 'tonixService',
  reqddi: '478478478',
  called_number: '478478478',
  caller_custkey: Math.floor(Math.random() * 900000) + i,
    call_custkey: Math.floor(Math.random() * 900000) + i,
  methodname: 'ticketoperation',
  start_time: '2019-01-08%12:01:28',
  caller_number: '478665511',
  conversation_uuid: '1546909286.448',
  department_id:1,
  client_id: '1002'

 };

 

    handlerClass.filterEventBasedRouting(toPass);
    console.log(`value of the loop event i ${i}`)
  }

//handlerClass.filterEventBasedRouting(toPass);