const a0_0x507a93=a0_0x5a58;(function(_0x468658,_0x313c37){const _0x39eb2f=a0_0x5a58,_0xa5bdfc=_0x468658();while(!![]){try{const _0x3871f4=parseInt(_0x39eb2f(0xce))/0x1+parseInt(_0x39eb2f(0xd3))/0x2+-parseInt(_0x39eb2f(0xd1))/0x3+parseInt(_0x39eb2f(0xcc))/0x4+-parseInt(_0x39eb2f(0xd5))/0x5*(parseInt(_0x39eb2f(0xc9))/0x6)+-parseInt(_0x39eb2f(0xd0))/0x7*(-parseInt(_0x39eb2f(0xd6))/0x8)+parseInt(_0x39eb2f(0xd4))/0x9*(-parseInt(_0x39eb2f(0xd2))/0xa);if(_0x3871f4===_0x313c37)break;else _0xa5bdfc['push'](_0xa5bdfc['shift']());}catch(_0x3878d9){_0xa5bdfc['push'](_0xa5bdfc['shift']());}}}(a0_0xe285,0xa9d1e));import'dotenv/config';import a0_0x23bea9 from'express';import a0_0x1b1a58 from'node-cleanup';function a0_0x5a58(_0x124991,_0x174acc){const _0xe28594=a0_0xe285();return a0_0x5a58=function(_0x5a58ee,_0xe2c31b){_0x5a58ee=_0x5a58ee-0xc7;let _0x8a32c7=_0xe28594[_0x5a58ee];return _0x8a32c7;},a0_0x5a58(_0x124991,_0x174acc);}import a0_0x52f43b from'./routes.js';import{init,cleanup}from'./whatsapp.js';import a0_0x592810 from'cors';const app=a0_0x23bea9(),host=process['env'][a0_0x507a93(0xcf)]||undefined,port=parseInt(process[a0_0x507a93(0xc7)][a0_0x507a93(0xca)]??0x1f40);app[a0_0x507a93(0xc8)](a0_0x592810()),app[a0_0x507a93(0xc8)](a0_0x23bea9['urlencoded']({'extended':!![]})),app[a0_0x507a93(0xc8)](a0_0x23bea9[a0_0x507a93(0xcb)]()),app['use']('/',a0_0x52f43b);function a0_0xe285(){const _0x433295=['log','438923ENfXGw','HOST','85743hOvIzy','1490484cbbiMs','30Xlepfw','1965680cNdMOu','348246SyyjUB','6185835OiCGjN','120FigkTp','listen','env','use','6huDsjX','PORT','json','3760644ThkmQN'];a0_0xe285=function(){return _0x433295;};return a0_0xe285();}const listenerCallback=()=>{const _0x42e44e=a0_0x507a93;init(),console[_0x42e44e(0xcd)]('Server\x20is\x20listening\x20on\x20http://'+(host?host:'localhost')+':'+port);};host?app[a0_0x507a93(0xd7)](port,host,listenerCallback):app[a0_0x507a93(0xd7)](port,listenerCallback);a0_0x1b1a58(cleanup);export default app;