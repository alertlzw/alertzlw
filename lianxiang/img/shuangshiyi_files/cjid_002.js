$(function(){var mySlidercaptcha;var startFlag=false;var cjView="";var $btn=null;var engine=null;var addressDomain="";var loginDomain="";var getGiftDomain="";var hkDomain="";var isMobile=false;function os(){var ua=navigator.userAgent,isWindowsPhone=/(?:Windows Phone)/.test(ua),isSymbian=/(?:SymbianOS)/.test(ua)||isWindowsPhone,isAndroid=/(?:Android)/.test(ua),isFireFox=/(?:Firefox)/.test(ua),isChrome=/(?:Chrome|CriOS)/.test(ua),isTablet=/(?:iPad|PlayBook)/.test(ua)||(isAndroid&&!/(?:Mobile)/.test(ua))||(isFireFox&&/(?:Tablet)/.test(ua)),isPhone=/(?:iPhone)/.test(ua)&&!isTablet,isPc=!isPhone&&!isAndroid&&!isSymbian;return{isPhone:isPhone,isAndroid:isAndroid,isPc:isPc}}if(os().isPhone||os().isAndroid){isMobile=true}if(document.domain.indexOf("lenovouat")==-1){if(isMobile){loginDomain="//reg.lenovo.com.cn";addressDomain="//m.lenovo.com.cn/h5-order/html/win.html";hkDomain="//captcha.lenovo.com.cn"}else{addressDomain="//shop.lenovo.com.cn/mycenter/win.html";hkDomain="//captcha.lenovo.com.cn"}getGiftDomain="//papi.lenovo.com.cn"}else{if(isMobile){loginDomain="//reg.lenovouat.com";addressDomain="//m.lenovouat.com/h5-order/html/win.html";hkDomain="//captcha.lenovouat.com"}else{hkDomain="//captcha.lenovouat.com";addressDomain="//shop.lenovouat.com/mycenter/win.html"}getGiftDomain="//papi.lenovouat.com"}$(".ui-slider-backImg").attr("ondragstart","return false");$(".ui-slider-checkImg").attr("ondragstart","return false");$btn=$("#cjhdStart");if($btn.hasClass("start")){cjView="dzp"}else{if($btn.hasClass("jggItem")){cjView="jgg"}}$btn.click(function(){if(startFlag){return}if(!passport.isLogin()){if(!isMobile){passport.show()}else{SSOLoginLenovo(window.location.href)}return}else{mySliderInit();$(".ui-slider-imageArea img").attr("ondragstart","return false")}});$("#mycode .close").click(function(){$("#mycode").hide()});$(".resultBtn").click(function(){$("#result").hide()});$(".toGet").click(function(){window.location.href=addressDomain});function SSOLoginLenovo(URL){var LoginURL=loginDomain+"/auth/v1/login?ticket=b044d754-bda2-4f56-9fea-dcf3aecfe782&iswap=0&ru="+URL;window.location.href=LoginURL}function mySliderInit(){mySlidercaptcha=new worker2();var slideWidth=$("#mycode .alertBox").width()-parseInt($("#mycode .alerFoot").css("padding-top"))*2;mySlidercaptcha.init({renderTo:"#mycode",btnCancel:".btnCancle",width:slideWidth,height:40,successMsg:"验证成功",url:hkDomain+"/htif/slidecaptcha/slider_sk_image_analyze.jsonp?scene=2",success:function(data){$("#mycode").hide();getGift(data.codeid,data.value,cjView)}},true)}function getGift(codeid,value,style){var rotatingwheelid=$btn.attr("data-drawid");$.ajax({url:getGiftDomain+"/draw/activity/lotterydrawaddress?aa="+new Date().getMilliseconds(),type:"get",dataType:"jsonp",data:{codeid:codeid,value:value,drawId:rotatingwheelid},success:function(res){$("#result").hide();if(res.status==200){if(style=="dzp"){var sector=360/(res.data.angle.endAngel-res.data.angle.startAngel);var deg=16-sector;var _angle=parseInt(Math.random()*((res.data.angle.endAngel-deg)-(res.data.angle.startAngel+deg))+(res.data.angle.startAngel+deg));var msg=res.data.msg;if(res.data.tpCoupon){msg=res.data.msg+"<br /><i>"+res.data.tpCoupon+"</i>"}var url="";if(isMobile){url=res.data.wapurl?res.data.wapurl:"javascript:;"}else{url=res.data.url?res.data.url:"javascript:;"}rotateFn(_angle,msg,res.data.prizetype,url)}else{if(style=="jgg"){var msg=res.data.msg;if(res.data.tpCoupon){msg=res.data.msg+"<br /><i>"+res.data.tpCoupon+"</i>"}engine.start();engine.result=res.data.angle;engine.prizeType=res.data.prizetype;engine.prizeTxt=msg;var url="";if(isMobile){url=res.data.wapurl?res.data.wapurl:"javascript:;"}else{url=res.data.url?res.data.url:"javascript:;"}engine.jumpTo=url}}}else{if(res.status==401){passport.show();return}else{res.msg=res.msg.replace(/[<>#]/g,"");alert(res.msg)}}},error:function(){alert("系统繁忙请稍后重试")}})}function rotateFn(angles,txt,prizeType,url){startFlag=true;$("#rotaryImg").stopRotate();$("#rotaryImg").rotate({angle:0,animateTo:1800-angles,duration:8000,callback:function(){$("#result").show();$("#result .jumpTo").attr("href",url);if(prizeType==0){if(txt.indexOf("//")!=-1){$(".box1").hide();$(".box2").css("backgroundImage",'url("http:'+txt+'")').show()}else{$(".box2").hide();$(".box1").show();$("#result .box1 .gxzj").hide();$("#result .box1 .giftname").hide();$("#result .box1 .toGet").hide();$("#result .box1 .xxcy").html(txt).show()}}else{if(txt.indexOf("//")!=-1){$(".box1").hide();$(".box2").css("backgroundImage",'url("http:'+txt+'")').show()}else{$(".box2").hide();$(".box1").show();$("#result .box1 .gxzj").show();$("#result .box1 .giftname").html(txt).show();if(prizeType==1){$("#result .box1 .toGet").text("维护收货地址").show()}else{$("#result .box1 .toGet").text("去查看").show()}$("#result .box1 .xxcy").hide()}}startFlag=false}})}var Part=function(id){this.id=id};var PartView=function(model){this.model=model;this.model.seat=0;switch(this.model.id){case 1:this.model.seat=1;break;case 2:this.model.seat=2;break;case 3:this.model.seat=3;break;case 8:this.model.seat=4;break;case 4:this.model.seat=6;break;case 7:this.model.seat=7;break;case 6:this.model.seat=8;break;case 5:this.model.seat=9;break;default:break}this.el=$(".child"+this.model.seat);this.addActive=function(){this.el.addClass("cur")};this.delActive=function(){this.el.removeClass("cur")};this.render=function(c){$(c).append($(this.el))}};var Engine=function(){var that=this;this.speed=100;this.pViews=[];this.result=-10;this.init=function(){var num=[1,2,3,8,-1,4,7,6,5];for(var i=0;i<num.length;i++){if(num[i]!=-1){var part=new Part(num[i]);var pv=new PartView(part);this.pViews.push(pv)}}};this.reset=function(){for(var i=0;i<this.pViews.length;i++){this.pViews[i].delActive()}};this._lastLoopTick=0;this._currentLoopTick=0;this.visualIndexArr=[0,1,2,4,7,6,5,3];this.getPartView=function(index){return this.pViews[this.visualIndexArr[index]]};var count=0;var time122=0;this.start=function(){startFlag=true;window.clearInterval(time122);this.speed=100;this.reset();time122=window.setInterval(function(){that._currentLoopTick=new Date().getTime();if(that._currentLoopTick-that._lastLoopTick>=that.speed){that._lastLoopTick=that._currentLoopTick;if(count==8){that.getPartView(count-1).delActive();count=0}if(count>0){that.getPartView(count-1).delActive()}that.getPartView(count).addActive();that.speed+=20;if(that.speed>500&&that.getPartView(count).model.id==that.result){window.clearInterval(time122);$("#result").show();$("#result .jumpTo").attr("href",that.jumpTo);if(that.prizeType==0){if(that.prizeTxt.indexOf("//")!=-1){$(".box1").hide();$(".box2").css("backgroundImage",'url("http:'+that.prizeTxt+'")').show()}else{$(".box2").hide();$(".box1").show();$("#result .box1 .gxzj").hide();$("#result .box1 .giftname").hide();$("#result .box1 .toGet").hide();$("#result .box1 .xxcy").html(that.prizeTxt).show()}}else{if(that.prizeTxt.indexOf("//")!=-1){$(".box1").hide();$(".box2").css("backgroundImage",'url("http:'+that.prizeTxt+'")').show()}else{$(".box2").hide();$(".box1").show();$("#result .box1 .gxzj").show();$("#result .box1 .giftname").html(that.prizeTxt).show();if(that.prizeType==1){$("#result .box1 .toGet").text("维护收货地址").show()}else{$("#result .box1 .toGet").text("去查看").show()}$("#result .box1 .xxcy").hide()}}startFlag=false}count++}},10)};this.init()};var engine=new Engine()});
(function(k){for(var d,f,l=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++){void 0!==l[h[g]]&&(d=h[g])}d&&(f=d.replace(/[tT]ransform/,"TransformOrigin"),"T"==f[0]&&(f[0]="t"));eval('IE = "v"=="\v"');jQuery.fn.extend({rotate:function(a){if(0!==this.length&&"undefined"!=typeof a){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,d=this.length;c<d;c++){var e=this.get(c);if(e.Wilq32&&e.Wilq32.PhotoEffect){e.Wilq32.PhotoEffect._handleRotation(a)}else{var f=k.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,f))._rootObj;b.push(k(e))}}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var d=this.get(b);d.Wilq32&&d.Wilq32.PhotoEffect&&(a[b]=d.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};this._img=this._rootObj=this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._onLoadDelegate=[b];this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,a);if(a.complete){this._Loader()}else{var c=this;jQuery(this._img).bind("load",function(){c._Loader()})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==typeof this._angle&&(this._angle=0);"number"===typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||this._defaultEasing;this._parameters.duration=a.duration||this._parameters.duration||1000;this._parameters.callback=a.callback||this._parameters.callback||this._emptyFunction;this._parameters.center=a.center||this._parameters.center||["50%","50%"];this._rotationCenterX="string"==typeof this._parameters.center[0]?parseInt(this._parameters.center[0],10)/100*this._imgWidth*this._aspectW:this._parameters.center[0];this._rotationCenterY="string"==typeof this._parameters.center[1]?parseInt(this._parameters.center[1],10)/100*this._imgHeight*this._aspectH:this._parameters.center[1];a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_emptyFunction:function(){},_defaultEasing:function(a,b,c,d,e){return -d*((b=b/e-1)*b*b*b-1)+c},_handleRotation:function(a,b){d||this._img.complete||b?(this._setupParameters(a),this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()):this._onLoadDelegate.push(a)},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b){b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}}this._parameters.bind=a;for(c in a){a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}}},_Loader:function(){return IE?function(){var a=this._img.width,b=this._img.height;this._imgWidth=a;this._imgHeight=b;this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=b+"px";this._vimage.style.width=a+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._aspectW=this._aspectH=1;this._container=this.createVMLNode("group");this._container.style.width=a;this._container.style.height=b;this._container.style.position="absolute";this._container.style.top="0px";this._container.style.left="0px";this._container.setAttribute("coordsize",a-1+","+(b-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=a+"px";this._rootObj.style.height=b+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;for(this._eventObj=this._rootObj;a=this._onLoadDelegate.shift();){this._handleRotation(a,!0)}}:function(){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._imgWidth=this._img.naturalWidth;this._imgHeight=this._img.naturalHeight;var a=Math.sqrt(this._imgHeight*this._imgHeight+this._imgWidth*this._imgWidth);this._width=3*a;this._height=3*a;this._aspectW=this._img.offsetWidth/this._img.naturalWidth;this._aspectH=this._img.offsetHeight/this._img.naturalHeight;this._img.parentNode.removeChild(this._img);this._canvas=document.createElement("canvas");this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._img.height*this._aspectW+"px";this._canvas.style.top=-this._img.width*this._aspectH+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._img.width*this._aspectW+"px";this._rootObj.style.height=this._img.height*this._aspectH+"px";this._eventObj=this._canvas;for(this._cnv=this._canvas.getContext("2d");a=this._onLoadDelegate.shift();){this._handleRotation(a,!0)}}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif){clearTimeout(this._timer)}else{if(this._canvas||this._vimage||this._img){a=this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration),this._rotate(~~(10*a)/10)}this._parameters.step&&this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return IE?function(a){this._angle=a;this._container.style.rotation=a%360+"deg";this._vimage.style.top=-(this._rotationCenterY-this._imgHeight/2)+"px";this._vimage.style.left=-(this._rotationCenterX-this._imgWidth/2)+"px";this._container.style.top=this._rotationCenterY-this._imgHeight/2+"px";this._container.style.left=this._rotationCenterX-this._imgWidth/2+"px"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)";this._img.style[f]=this._parameters.center.join(" ")}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width;this._canvas.height=this._height;this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH);this._cnv.translate(this._rotationCenterX,this._rotationCenterY);this._cnv.rotate(b);this._cnv.translate(-this._rotationCenterX,-this._rotationCenterY);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return !document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);

