var _0x57f2=['change','.square','removeClass','attr','#btn-generate','click','#txt-difficulty','#txt-unique',':checked','generate','#txt-puzzle','val','board_string_to_grid','undefined','solve','print','#btn-clear','.ipt','length','each','removeAttr','disabled','addClass','ipt','green-text','#btn-download','createElement','canvas','querySelector','getComputedStyle','width','style','height','then','image/png','Sudoku.png','href','downloadurl','download','join','body','appendChild','removeChild','<tr/>','<td/>','border-right','append','<input/>','-col','border-bottom','#sudoku-board','getElementById','sudoku-table','getElementsByTagName','#sudoku-board\x20input#row'];(function(_0x4f9343,_0x5395d3){var _0xdaf64f=function(_0x360c03){while(--_0x360c03){_0x4f9343['push'](_0x4f9343['shift']());}};_0xdaf64f(++_0x5395d3);}(_0x57f2,0x1bc));var _0xf96a=function(_0x806fc1,_0x220507){_0x806fc1=_0x806fc1-0x0;var _0x266495=_0x57f2[_0x806fc1];return _0x266495;};$(function(){build_board();});$(_0xf96a('0x0'))[_0xf96a('0x1')](function(){var _0x4404f7=$(_0xf96a('0x2'))['val']();var _0x56d403=$(_0xf96a('0x3'))['is'](_0xf96a('0x4'));var _0x271cc4=sudoku[_0xf96a('0x5')](_0x4404f7,_0x56d403);$(_0xf96a('0x6'))[_0xf96a('0x7')](_0x271cc4);display_puzzle(sudoku[_0xf96a('0x8')](_0x271cc4));});$('#btn-solve')[_0xf96a('0x1')](function(){var _0x1f2736=$(_0xf96a('0x6'))[_0xf96a('0x7')]();if(typeof _0x1f2736!==_0xf96a('0x9')){display_puzzle(sudoku['board_string_to_grid'](_0x1f2736),!![]);var _0x34ee2b=![];try{var _0x6e1e8=sudoku[_0xf96a('0xa')](_0x1f2736);}catch(_0x43386d){_0x34ee2b=!![];}if(_0x6e1e8&&!_0x34ee2b){$('#txt-solve')[_0xf96a('0x7')](_0x6e1e8);display_puzzle(sudoku[_0xf96a('0x8')](_0x6e1e8),!![]);}else{}}});$('#btn-print')[_0xf96a('0x1')](function(){$('#sudoku-table')[_0xf96a('0xb')]();});$(_0xf96a('0xc'))[_0xf96a('0x1')](function(){let _0x4a1ce8=$(_0xf96a('0xd'));if(_0x4a1ce8[_0xf96a('0xe')]>0x0){$('.ipt')[_0xf96a('0xf')](function(){$(this)[_0xf96a('0x7')]('');$(this)[_0xf96a('0x10')](_0xf96a('0x11'));});return;}$('.green-text')[_0xf96a('0xf')](function(){$(this)[_0xf96a('0x12')](_0xf96a('0x13'));$(this)['removeClass'](_0xf96a('0x14'));$(this)[_0xf96a('0x7')]('');$(this)[_0xf96a('0x10')]('disabled');});});$(_0xf96a('0x15'))[_0xf96a('0x1')](function(){var _0x1f2c41=document[_0xf96a('0x16')](_0xf96a('0x17'));let _0x1249f3=document[_0xf96a('0x18')]('#sudoku-panel');var _0x5e9f68=parseInt(window['getComputedStyle'](_0x1249f3)['width']);var _0x41d4cf=parseInt(window[_0xf96a('0x19')](_0x1249f3)['height']);_0x1f2c41[_0xf96a('0x1a')]=_0x5e9f68;_0x1f2c41['height']=_0x41d4cf;_0x1f2c41['style']['width']=_0x5e9f68+'px';_0x1f2c41[_0xf96a('0x1b')][_0xf96a('0x1c')]=_0x41d4cf+'px';html2canvas(_0x1249f3,{'canvas':_0x1f2c41,'scale':0x1})[_0xf96a('0x1d')](_0x1f2c41=>{var _0x321143=_0x1f2c41['toDataURL'](_0xf96a('0x1e'),0x1);var _0x4916a3=document[_0xf96a('0x16')]('a');_0x4916a3['download']=_0xf96a('0x1f');_0x4916a3[_0xf96a('0x20')]=_0x321143;_0x4916a3['dataset'][_0xf96a('0x21')]=[_0xf96a('0x1e'),_0x4916a3[_0xf96a('0x22')],_0x4916a3['href']][_0xf96a('0x23')](':');document[_0xf96a('0x24')][_0xf96a('0x25')](_0x4916a3);_0x4916a3[_0xf96a('0x1')]();document[_0xf96a('0x24')][_0xf96a('0x26')](_0x4916a3);});});var build_board=function(){for(var _0xa600ca=0x0;_0xa600ca<0x9;++_0xa600ca){var _0x1da318=$(_0xf96a('0x27'),{});for(var _0x4c2354=0x0;_0x4c2354<0x9;++_0x4c2354){var _0x15d7c5=$(_0xf96a('0x28'),{});if(_0x4c2354%0x3==0x2&&_0x4c2354!=0x8){_0x15d7c5[_0xf96a('0x12')](_0xf96a('0x29'));}_0x15d7c5[_0xf96a('0x2a')]($(_0xf96a('0x2b'),{'id':'row'+_0xa600ca+_0xf96a('0x2c')+_0x4c2354,'class':'square','maxlength':'9','type':'text','disabled':_0xf96a('0x11')}));_0x1da318['append'](_0x15d7c5);}if(_0xa600ca%0x3==0x2&&_0xa600ca!=0x8){_0x1da318[_0xf96a('0x12')](_0xf96a('0x2d'));}$(_0xf96a('0x2e'))[_0xf96a('0x2a')](_0x1da318);}var _0x3a0a75=document[_0xf96a('0x2f')](_0xf96a('0x30'));var _0x35e742=_0x3a0a75[_0xf96a('0x31')]('td');for(var _0x331b16=0x0;_0x331b16<_0x35e742[_0xf96a('0xe')];_0x331b16++){var _0x6d4ab8=_0x35e742[_0x331b16]['offsetWidth'];var _0x9d86c4=_0x6d4ab8;_0x35e742[_0x331b16]['style'][_0xf96a('0x1c')]=_0x9d86c4+'px';}};var display_puzzle=function(_0x522cb4,_0x51deaf){for(var _0x12aba9=0x0;_0x12aba9<0x9;++_0x12aba9){for(var _0x169d62=0x0;_0x169d62<0x9;++_0x169d62){var _0x2c0e2d=$(_0xf96a('0x32')+_0x12aba9+'-col'+_0x169d62);_0x2c0e2d['removeClass'](_0xf96a('0x14'));if(_0x522cb4[_0x12aba9][_0x169d62]!=sudoku['BLANK_CHAR']){var _0x46e86d=_0x522cb4[_0x12aba9][_0x169d62];var _0x5987e8=_0x2c0e2d['val']();if(_0x51deaf&&_0x46e86d!=_0x5987e8){_0x2c0e2d[_0xf96a('0x12')](_0xf96a('0x14'));}_0x2c0e2d[_0xf96a('0x7')](_0x46e86d);}else{_0x2c0e2d[_0xf96a('0x7')]('');}_0x2c0e2d[_0xf96a('0x33')]();}}$(_0xf96a('0x34'))[_0xf96a('0xf')](function(){if($(this)[_0xf96a('0x7')]()==''){$(this)[_0xf96a('0x12')](_0xf96a('0x13'));$(this)[_0xf96a('0x10')](_0xf96a('0x11'));}else{$(this)[_0xf96a('0x35')](_0xf96a('0x13'));$(this)[_0xf96a('0x36')](_0xf96a('0x11'),_0xf96a('0x11'));}});};