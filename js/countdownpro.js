var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Andrew Urquhart : CountDownPro Timer : www.andrewu.co.uk/clj/countdown/pro/
function CD_M(strTagId){var objMeta=document.getElementsByTagName("meta");if(objMeta&&objMeta.length){for(var i=0;i<objMeta.length;++i){if(objMeta.item(i).scheme==strTagId){var name=objMeta.item(i).name;var content=objMeta.item(i).content;if(name.indexOf("mindigits")>0||name.indexOf("hidezero")>0){window[strTagId][name]=parseInt(content,10)}else {window[strTagId][name]=content}}}}};function CD_UD(strContent,objW){objW.node.innerHTML=strContent};function CD_T(strTagId){var objNow=new Date();var objW=window[strTagId];if(objW.msoffset){objNow.setMilliseconds(objNow.getMilliseconds()+objW.msoffset)};CD_C(objNow,objW);if(objW.intEvntDte<=objNow.valueOf()){if(objW.event_functionhandler&&typeof window[objW.event_functionhandler]=="function"){window[objW.event_functionhandler](new Date(objW.intEvntDte));objW.event_functionhandler=""}if(objW.event_msg||objW.event_redirecturl){var msg="<span id=\""+strTagId+"_complete\">"+objW.event_msg+"</span>";if(objW.event_redirecturl){location.href=objW.event_redirecturl}else if(objW.event_audio_src){var strMimeType=objW.event_audio_mimetype;var audioObject="<object style=\"visibility:hidden;\" id=\"MediaPlayer\" width=\"2\" height=\"2\" data=\""+objW.event_audio_src+"\" type=\""+strMimeType+"\"></object>";CD_UD(msg+audioObject,objW)}else {CD_UD(msg,objW)};return}};setTimeout("if(typeof CD_T=='function'){CD_T(\""+strTagId+"\")}",1100-objNow.getMilliseconds())};function CD_C(objNow,objW){var intMS=objW.intEvntDte-objNow.valueOf();if(intMS<=0){intMS*=-1};var intD=Math.floor(intMS/864E5);intMS=intMS-(intD*864E5);var intH=Math.floor(intMS/36E5);intMS=intMS-(intH*36E5);var intM=Math.floor(intMS/6E4);intMS=intMS-(intM*6E4);var intS=Math.floor(intMS/1E3);var strTmp=CD_F(intD,"d",objW)+CD_F(intH,"h",objW)+CD_F(intM,"m",objW)+CD_F(intS,"s",objW);CD_UD(strTmp,objW)};function CD_F(intData,strPrefix,objW){if(intData==0&&objW[strPrefix+"_hidezero"]){return ""};var strResult=""+intData;var intMinDigits=objW[strPrefix+"_mindigits"];if(intData.toString().length<intMinDigits){strResult="0000000000"+strResult;strResult=strResult.substring(strResult.length,strResult.length-intMinDigits)}if(intData!=1){strResult+=objW[strPrefix+"_units"]}else {strResult+=objW[strPrefix+"_unit"]};return objW[strPrefix+"_before"]+strResult+objW[strPrefix+"_after"]};function CD_Parse(strDate){var objReDte=/(\d{4})\-(\d{1,2})\-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{0,2})\s+GMT([+\-])(\d{1,2}):?(\d{1,2})?/;if(strDate.match(objReDte)){var d=new Date(0);d.setUTCFullYear(+RegExp.$1,+RegExp.$2-1,+RegExp.$3);d.setUTCHours(+RegExp.$4,+RegExp.$5,+RegExp.$6);var tzs=(RegExp.$7=="-"?-1:1);var tzh=+RegExp.$8;var tzm=+RegExp.$9;if(tzh){d.setUTCHours(d.getUTCHours()-tzh*tzs)}if(tzm){d.setUTCMinutes(d.getUTCMinutes()-tzm*tzs)};return d}else {return NaN}};function CD_Init(){var strTagPrefix="countdown";var objElem=true;if(document.getElementById){for(var i=1;objElem;++i){var strTagId=strTagPrefix+i;objElem=document.getElementById(strTagId);if(objElem&&(typeof objElem.innerHTML)!='undefined'){var strDate=objElem.innerHTML;var objDate=CD_Parse(strDate);if(!isNaN(objDate)){var objW=window[strTagId]=new Object();objW.intEvntDte=objDate.valueOf();objW.node=objElem;objW.servertime="";objW.d_mindigits=1;objW.d_unit=" day";objW.d_units=" days";objW.d_before="";objW.d_after=" ";objW.d_hidezero=0;objW.h_mindigits=2;objW.h_unit="h";objW.h_units="h";objW.h_before="";objW.h_after=" ";objW.h_hidezero=0;objW.m_mindigits=2;objW.m_unit="m";objW.m_units="m";objW.m_before="";objW.m_after=" ";objW.m_hidezero=0;objW.s_mindigits=2;objW.s_unit="s";objW.s_units="s";objW.s_before="";objW.s_after=" ";objW.s_hidezero=0;objW.event_msg="";objW.event_audio_src="";objW.event_audio_mimetype="";objW.event_redirecturl="";objW.event_functionhandler="";CD_M(strTagId);if(objW.servertime){var objSrvrTm=CD_Parse(objW.servertime);if(isNaN(objSrvrTm)){objElem.innerHTML=strDate+"**";continue}else {objW.msoffset=parseInt((objSrvrTm.valueOf()-(new Date()).valueOf())/1000,10)*1000}}else {objW.msoffset=0};CD_T(strTagId);if(objElem.style){objElem.style.visibility="visible"}}else {objElem.innerHTML=strDate+"<a href=\"http://andrewu.co.uk/clj/countdown/pro/\" title=\"CountdownPro Error:Invalid date format used,check documentation (see link)\">*</a>"}}}}}if(window.attachEvent){window.attachEvent('onload',CD_Init)}else if(window.addEventListener){window.addEventListener("load",CD_Init,false)}else {window.onload=CD_Init};


}
/*
     FILE ARCHIVED ON 10:03:39 Sep 22, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:07:40 Dec 11, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 102.39
  exclusion.robots: 0.062
  exclusion.robots.policy: 0.057
  cdx.remote: 0.052
  esindex: 0.02
  LoadShardBlock: 78.847 (3)
  PetaboxLoader3.datanode: 90.507 (4)
  CDXLines.iter: 14.528 (3)
  load_resource: 20169.546
  PetaboxLoader3.resolve: 20153.123
*/