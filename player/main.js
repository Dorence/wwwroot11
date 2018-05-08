"use strict";
var getH={};
var js;
var pl;
var vEle=document.getElementById("videoEle");
var flvjs=flvjs,videojs=videojs,DPlayer=DPlayer;

function rm(s,c){"use strict";if($(s).hasClass(c)){$(s).removeClass(c);}}
function ad(s,c){"use strict";if(!$(s).hasClass(c)){$(s).addClass(c);}}

function loadS(src,done,d)
{
	if(d===src.length-1)
	{
		return "$.getScript(\""+src[d]+"\").done(function(s"+d+",t"+d+"){console.log(\""+src[d]+ " : \"+t"+d+");"+done+";})\n";
	}
	else
	{
		return "$.getScript(\""+src[d]+"\").done(function(s"+d+",t"+d+")\n{console.log(\""+src[d]+" : \"+t"+d+");\n"+loadS(src,done,d+1)+";});\n";
	}
}

function videoJSDone()
{
	if(videojs)
	{
		if(getH.src&&getH.src.lastIndexOf(".")!==(-1))
		{
			$(vEle).addClass("video-js").attr("controls",true);
			pl=videojs("videoEle",
			{
				"controls": true,
				"autoplay": false,
				"preload": "auto",
				"loop": false,
				language: 'zh-CN',
				playbackRates: [0.5,1,1.5,2,4,8],
				controlBar : {
					captionsButton: false,chaptersButton: false,
					playbackRateMenuButton: true,LiveDisplay: true,
					subtitlesButton: false,remainingTimeDisplay: true,
					progressControl: true,
					volumeMenuButton:{inline: false,vertical: true},
					fullscreenToggle: true
				},
				sources :[{
					src : getH.src,
					type : "video/"+getH.src.substr(getH.src.lastIndexOf(".")+1)
				}]
			}
			);
			document.getElementById("PH").innerHTML="<a href=\""+getH.src+"\" download=\""+getH.src+"\" >"+getH.src+"</a>";
		}
		else
		{
			$(vEle).addClass("video-js").attr("controls",true);
			pl=videojs("videoEle",{
				"controls": true,
				"autoplay": false,
				"preload": "auto",
				"loop": false,
				language: 'zh-CN',
				playbackRates: [0.1,0.5,1,1.5,2,8],
				controlBar : {
					captionsButton: false,chaptersButton: false,
					playbackRateMenuButton: true,LiveDisplay: true,
					subtitlesButton: false,remainingTimeDisplay: true,
					progressControl: true,
					volumeMenuButton:{inline: false,vertical: true},
					fullscreenToggle: true
				}
			});
		}
		$("#aVid").children("p").append("&nbsp;&nbsp;<span class=\"badge\">✔</span>");
		getH.player=true;
	}
	else
	{
		$("#aVid").children("p").append("&emsp;<span class=\"badge\">✖</span>");
		getH.player=false;
	}
}

function loadPlayer()
{

	console.log("loading "+getH.p);
	switch(getH.p)
	{
		case "flv.js":
			$.getScript("assets/flv.js/flv.min.js").done(function(script,textStatus) {
			  	console.log("flv.js "+textStatus);
				if(flvjs.isSupported())
				{
					if(getH.src&&getH.src.lastIndexOf(".")!==(-1))
					{
						var str=getH.src;
						var tp=str.substr(str.lastIndexOf(".")+1);
						console.log("type:"+tp);
						if(tp==="flv"||tp==="mp4")
						{
							pl=flvjs.createPlayer({type:tp,url:str});
							pl.attachMediaElement(vEle);
							pl.load();
							document.getElementById("PH").innerHTML="<a href=\""+str+"\">"+str+"</a>";
						}
					}
					$("#aFlv").children("p").append("&emsp;<span class=\"badge\">✔</span>");
					getH.player=true;
				}
				else
				{
					$("#aFlv").children("p").append("&emsp;<span class=\"badge\">✖</span>");
					getH.player=false;
				}
			});
		break;
		case "video.js":
			$("<link>").attr({rel:"stylesheet",type:"text/css",href:"assets/video.js/video-js.min.css"}).appendTo("head");
			eval(loadS(["assets/video.js/video.min.js","assets/video.js/videojs-contrib-hls.min.js","assets/video.js/lang/zh-CN.js"],"videoJSDone()",0));
		break;
		case "dplayer":
			$("<link>").attr({rel:"stylesheet",type:"text/css", href:"assets/DPlayer/DPlayer.min.css"}).appendTo("head");
			$.getScript("assets/DPlayer/DPlayer.min.js").done(function(s,t){
				console.log("DPlayer.min.js : "+t);
				if(DPlayer)
				{
					$("#divV").removeClass("hidden");
					$(vEle).addClass("hidden");
					pl=new DPlayer({
						container:document.getElementById("divV"),
						autoplay:false,lang: 'zh-cn',hotkey: true,screenshot: true,
						loop:true,preload: 'auto',volume: 0.5,mutex: true,
						video:{url:(getH.src?getH.src:""),type:'auto'}
					});
					$("#aDP").children("p").append("&emsp;<span class=\"badge\">✔</span>");
					getH.player=true;
				}
				else
				{
					$("#aDP").children("p").append("&emsp;<span class=\"badge\">✖</span>");
					getH.player=false;
				}
			});
		break;
	}
}

function procx(x,y)
{
	if(getH.player)
	{
		var u=document.getElementById("srcV");
		if(u){u.parentNode.removeChild(u);}
		var q=0;
		for(;q<js.listGroup.length;q++)
		{
			if(js.listGroup[q].id===js.currList){break;}
		}
		var str=(y>=0)?js.l[q][x].list[y].src:js.l[q][x].src;
		if(js.l[q][x].root){str=js.l[q][x].root+str;}
		var tp=str.substr(str.lastIndexOf(".")+1);
		switch(getH.p)
		{
			case "flv.js":
				if(tp==="m3u8"){document.getElementById("PH").innerHTML="Not support m3u8!";return;}
				if(pl!==undefined&&pl!==null){pl.destroy();}
				pl=flvjs.createPlayer({type:tp,url:str});
				pl.attachMediaElement(vEle);
				pl.load();
			break;
			case "video.js":
				if(tp==="m3u8"){pl.src({src: str,type: "application/x-mpegURL"});}
				else{pl.src({src: str,type: "video/"+tp});}
				pl.play();
			break;
			case "dplayer":
				pl.switchVideo({url:str});
				pl.play();
			break;
		}
		document.getElementById("PH").innerHTML="<a href=\""+str+"\" download=\""+str+"\" >"+str+"</a>";
	}
	else
	{
		document.getElementById("PH").innerHTML="NO Player!";
	}
}

function Pstart(){pl.play();if($("#iptR").val()){Prate();}}
function Ppause(){pl.pause();}
function PseekTo(){
	var x=parseFloat($("#iptS").val());
	console.log(pl);
	switch(getH.p)
	{
		case "flv.js":pl.currentTime=x;break;
		case "video.js":pl.currentTime(x);break;
		case "dplayer":pl.seek(x);break;
	}
}
function Prate(){
	var x=parseFloat($("#iptR").val());
	switch(getH.p)
	{
		case "flv.js":pl._mediaElement.playbackRate=x;break;
		case "video.js":pl.playbackRate(x);break;
		case "dplayer":pl.speed(x);break;
	}
}

function loadList(h)
{
	var src=js.listGroup[h].src;
	$.ajax({
		url:src,type:"GET",dataType:"json",cache:false,
		success:function(t){console.log("G "+src);console.log(js.l[h]=eval(t));},
		error:function(t){console.log("E "+src);console.log(js.l[h]=eval("("+t.responseText+")"));},
		complete:function()
		{
			getH.curr=js.currList=js.listGroup[h].id;
			var o="",i;
			var p=js.l[h]=js.l[h].list;
			//console.log(js);
			var c=$("#ulDD").children(),cc;
			for(i=0;i<c.length;i++)
			{
				cc=$(c[i]).children(".btn")[0];
				if(i===h){ad(c[i],"hidden");rm(cc,"active");}
				else if(i<h)
				{
					rm(c[i],"hidden");
					if(i%2){ad(cc,"btn-info");rm(cc,"btn-default");}
					else{ad(cc,"btn-default");rm(cc,"btn-info");}
				}
				else
				{
					rm(c[i],"hidden");
					if(i%2){ad(cc,"btn-default");rm(cc,"btn-info");}
					else{ad(cc,"btn-info");rm(cc,"btn-default");}
				}
			}
			$("#btnDD").html(js.listGroup[h].name+"&nbsp;<i class='fa fa-toggle-down'></i>");
			for(i=0;i<p.length;i++)
			{
				if(p[i].list)
				{
					o+="<div class='list-group-item"+((i%2)?" list-group-item-info":"")+" list-group-panel'><div class='panel"+((i%2)?" panel-info":"")+"'><div class='panel-heading'><p class='panel-title'><a data-toggle=\"collapse\" data-parent=\"#Plist\" href=\"#coll"+i+"\">"+p[i].name+"&emsp;<span class=\"glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span></a></p></div><div id='coll"+i+"' class=\"panel-collapse collapse\"><div class='panel-body'>";
					for(var j=0;j<p[i].list.length;j++)
					{
						o+="<button class='list-group-item"+((j%2)?" list-group-item-warning":"")+"' onClick='procx("+i+","+j+")'>"+p[i].list[j].name+"</button>";
					}
					o+="</div></div></div></div>";
				}
				else
				{
					o+="<button type=\"button\" class='list-group-item"+((i%2)?" list-group-item-info":"");
					o+="' onClick='procx("+i+",-1)'>"+p[i].name+"</button>";
				}
			}
			//console.log(o);
			$("#colL").html(o);
		}
	});
}

function init()
{
	if(location.href.indexOf("?")>=0)
	{
		var url=decodeURI(decodeURI(location.href.substr(location.href.indexOf("?")+1)));
		url=url.split("&");
		for(var l=0;l<url.length;l++)
		{
			url[l]=url[l].split("=");
			getH[url[l][0]]=url[l][1];
		}
		console.log(getH);
		if(getH.p){loadPlayer();}
	}
	if(!getH.p){getH.p="flv.js";loadPlayer();}
	$.ajax({
		url:"list.json",type:"GET",dataType:"json",cache:false,
		success:function(t){console.log("G list.json");console.log(js=eval(t));},
		error:function(t){console.log("E list.data");console.log(js=eval("("+t.responseText+")"));},
		complete:function()
		{
			var o="",x,flag=false;
			if(getH.curr){js.currList=getH.curr;}
			js.l=new Array(js.listGroup.length);
			for(var i=0;i<js.listGroup.length;i++)
			{
				x=js.listGroup[i];
				if(x.id===js.currList)
				{
					$("#btnDD").html(x.name+"&nbsp;<i class='fa fa-toggle-down'></i>");
					loadList(i);flag=true;
					o+="<li class='hidden'><button class='btn btn-"+((i%2)?"info":"default")+" btn-block active' onClick='loadList("+i+")'>"+x.name+"</button></li>";
				}
				else
				{
					o+="<li><button class='btn btn-"+((i%2)?"info":"default")+" btn-block' onClick='loadList("+i+")'>"+x.name+"</button></li>";
				}
			}
			//console.log(o);
			$("#ulDD").html(o);
			if(!flag){loadList(0);}
		}
	});
}

$(document).load(init());

function switchPlayer(p)
{
	var o="";
	if(getH.curr){o+="curr="+getH.curr+"&";}
	if(getH.src){o+="src="+getH.src+"&";}
	o+="p="+p;
	window.location.href="?"+o;
}
