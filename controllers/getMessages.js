(function(_0x3dbaa5,_0x2b67df){const _0xf4af94=a0_0x3370,_0x110fdc=_0x3dbaa5();while(!![]){try{const _0x6b21cf=parseInt(_0xf4af94(0xaa))/0x1+parseInt(_0xf4af94(0xa9))/0x2*(parseInt(_0xf4af94(0xa8))/0x3)+-parseInt(_0xf4af94(0xa6))/0x4+parseInt(_0xf4af94(0xa5))/0x5*(-parseInt(_0xf4af94(0xa4))/0x6)+parseInt(_0xf4af94(0xab))/0x7+-parseInt(_0xf4af94(0xa2))/0x8*(-parseInt(_0xf4af94(0xb2))/0x9)+-parseInt(_0xf4af94(0xb1))/0xa;if(_0x6b21cf===_0x2b67df)break;else _0x110fdc['push'](_0x110fdc['shift']());}catch(_0x154ad2){_0x110fdc['push'](_0x110fdc['shift']());}}}(a0_0x1fb5,0xf2887));function a0_0x3370(_0x33ebeb,_0x1a16d2){const _0x1fb53d=a0_0x1fb5();return a0_0x3370=function(_0x3370d2,_0xf656c7){_0x3370d2=_0x3370d2-0xa1;let _0x1992c9=_0x1fb53d[_0x3370d2];return _0x1992c9;},a0_0x3370(_0x33ebeb,_0x1a16d2);}import{getSession,formatGroup,formatPhone}from'../whatsapp.js';import a0_0x1839d9 from'.././response.js';const {response}=a0_0x1839d9,getMessages=async(_0x1e9b39,_0x23d130)=>{const _0x2b760=a0_0x3370,_0x303985=getSession(_0x23d130[_0x2b760(0xa7)][_0x2b760(0xae)]),{jid:_0x58cff4}=_0x1e9b39[_0x2b760(0xad)],{limit:limit=0x19,cursorId:cursorId=null,cursorFromMe:cursorFromMe=null,isGroup:isGroup=![]}=_0x1e9b39[_0x2b760(0xa1)],_0x25f50e=isGroup===_0x2b760(0xa3),_0x4ce6d0=_0x25f50e?formatGroup(_0x58cff4):formatPhone(_0x58cff4),_0x253de7={};cursorId&&(_0x253de7['before']={'id':cursorId,'fromMe':Boolean(cursorFromMe&&cursorFromMe===_0x2b760(0xa3))});try{const _0x2c1263='before'in _0x253de7?_0x253de7:null,_0x4148a9=await _0x303985[_0x2b760(0xb0)][_0x2b760(0xac)](_0x4ce6d0,limit,_0x2c1263);response(_0x23d130,0xc8,!![],'',_0x4148a9);}catch{response(_0x23d130,0x1f4,![],_0x2b760(0xaf));}};export default getMessages;function a0_0x1fb5(){const _0x10fee4=['613077YkMPgv','7750407illfIu','loadMessages','params','sessionId','Failed\x20to\x20load\x20messages.','store','2569470YpPLKO','8055nWMzES','query','4528feKBGw','true','22830SDmyBq','1695TTKdrC','723860Rmjhyr','locals','741561RLuXOC','4PhnuPV'];a0_0x1fb5=function(){return _0x10fee4;};return a0_0x1fb5();}