var x= document.getElementsByTagName("script");

var num_get = 0;
var num_push= 0;
var num_getTime=0;
var num_hasClass=0;
var num_loadScript=0;
var num_createTextNode=0;
var num_cookie=0;
var num_isFunction=0;
var num_escape=0;
var num_getAttribute=0;
var num_toGMTString=0; 
var num_handleObj=0
var num_attachEvent=0;
var num_scrollTop=0;
var num_charAt=0;
var num_preventDefault=0;
var num_substring=0;
var num_getArray=0;
var num_makeArray=0;
var num_getMonth=0;
var num_getYear=0;

	for(var i=0;i<x.length;i++){
		var tempString= x[i].innerHTML;
		if(tempString!=""){
			temp = tempString.match(/get/g);
			if(temp!=null){
			num_get = num_get + temp.length;
			console.log('num_get');
			console.log(num_get);
}			
			temp = tempString.match(/push/g);
			if(temp!=null){
			num_push= num_push + temp.length;
			console.log('num_push');
			console.log(num_push);	
}
			temp = tempString.match(/getTime/g);
			if(temp!=null){
			num_getTime= num_getTime + temp.length;
			console.log('num_getTime');
			console.log(num_getTime);
}
			temp = tempString.match(/hasClass/g);
			if(temp!=null){
			num_hasClass= num_hasClass + temp.length;
			console.log('num_hasClass');
			console.log(num_hasClass);	
}		
			temp = tempString.match(/loadScript/g);
			if(temp!=null){
			num_loadScript= num_loadScript + temp.length;
			console.log('num_loadScript');
			console.log(num_loadScript);	
}
			temp = tempString.match(/createTextNode/g);
			if(temp!=null){
			num_createTextNode= num_createTextNode + temp.length;
			console.log('num_createTextNode');
			console.log(num_createTextNode);	
}
			temp = tempString.match(/cookie/g);
			if(temp!=null){
			num_cookie= num_cookie + temp.length;
			console.log('num_cookie');
			console.log(num_cookie);	
}
			temp = tempString.match(/isFunction/g);
			if(temp!=null){
			num_isFunction= num_isFunction + temp.length;
			console.log('num_isFunction');
			console.log(num_isFunction);	
}
			temp = tempString.match(/escape/g);
			if(temp!=null){
			num_escape= num_escape + temp.length;
			console.log('num_escape');
			console.log(num_escape);
}
			temp = tempString.match(/getAttribute/g);
			if(temp!=null){
			num_getAttribute= num_getAttribute + temp.length;
			console.log('num_getAttribute');
			console.log(num_getAttribute);
}	
			temp = tempString.match(/toGMTString/g);		
			if(temp!=null){
			num_toGMTString= num_toGMTString + temp.length;
			console.log('num_toGMTString');
			console.log(num_toGMTString);
}
			temp = tempString.match(/handleObj/g);
			if(temp!=null){
			num_handleObj= num_handleObj + temp.length;
			console.log('num_handleObj');
			console.log(num_handleObj);
}
			temp = tempString.match(/attachEvent/g);
			if(temp!=null){
			num_attachEvent= num_attachEvent + temp.length;
			console.log('num_attachEvent');
			console.log(num_attachEvent);
}
			temp = tempString.match(/scrollTop/g);
			if(temp!=null){
			num_scrollTop= num_scrollTop + temp.length;
			console.log('num_scrollTop');
			console.log(num_scrollTop);
}
			temp = tempString.match(/charAt/g);
			if(temp!=null){
			num_charAt= num_charAt + temp.length;
			console.log('num_charAt');
			console.log(num_charAt);
}	
			temp = tempString.match(/preventDefault/g);
			if(temp!=null){
			num_preventDefault= num_preventDefault + temp.length;
			console.log('num_preventDefault');
			console.log(num_preventDefault);
}	
			temp = tempString.match(/makeArray/g);
			if(temp!=null){
			num_makeArray= num_makeArray + temp.length;
			console.log('num_makeArray');
			console.log(num_makeArray);
}	
			temp = tempString.match(/substring/g);
			if(temp!=null){
			num_substring= num_substring + temp.length;
			console.log('num_substring');
			console.log(num_substring);
}
			temp = tempString.match(/getMonth/g);
			if(temp!=null){
			num_getMonth= num_getMonth + temp.length;
			console.log('num_getMonth');
			console.log(num_getMonth);
}	
			temp = tempString.match(/getYear/g);
			if(temp!=null){
			num_getYear= num_getYear + temp.length;
			console.log('num_getYear');
			console.log(num_getYear);
}
			temp = tempString.match(/getArray/g);
			if(temp!=null){
			num_getArray= num_getArray + temp.length;
			console.log('num_getArray');
			console.log(num_getArray);
}			
			
		}
		else console.log(x[i].src);

			temp = tempString.match(/(\/ads?\.(js|php|pl|htm|html|asp|aspx|cgi|css)\??$)/g);
			if(temp!=null){
			console.log('This is an ad');
			
}

			temp = tempString.match(/(.*A|ˆa)ds?([A-Z -].*)?$/g);
			if(temp!=null){
			console.log('This is an ad');
			
}

	}

