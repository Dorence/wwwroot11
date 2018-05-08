"use strict";

/*
    isPay         -> 0:free;1:会员
    ifHasPlayback -> 0:无回放;1:有回放
    matchPeriod   -> 0:未开始;1:直播中;2.已结束
	matchDesc     -> "NBA季后赛";"NBA常规赛"
*/

function Team(abbr,id,idTencent,idHupu,code,enName,chName,pyName,enCity,chCity,enSta,region,division)
{
    this.abbr=abbr;this.id=id;this.idT=idTencent;this.idH=idHupu;this.code=code;
    this.en=enName;this.cn=chName;this.py=pyName.split(" ");this.ec=enCity;this.cc=chCity;this.eSt=enSta;this.reg=region;this.div=division;
}

var _TEAMS=[
new Team("ATL",1,1,8,"hawks",          "Hawks","老鹰","lao ying","Atlanta","亚特兰大","Philips Arena","E","Central"),    
new Team("BOS",2,2,1,"celtics",        "Celtics","凯尔特人","kai er te ren","Boston","波士顿","TD Garden(The Toronto-Dominion Bank)","E","Atlantic"),
new Team("BKN",3,17,182,"nets",        "Nets","篮网","lan wang","Brooklyn","布鲁克林","Barclays Center","E","Atlantic"),
new Team("CHA",4,30,30,"hornets",      "Hornets","黄蜂","huang feng","Charlotte","夏洛特","Spectrum Center","E","Southeast"),
new Team("CHI",5,4,9,"bulls",          "Bulls","公牛","gong niu","Chicago","芝加哥","United Center","E","Central"),
new Team("CLE",6,5,10,"cavaliers",     "Cavaliers","骑士","qi shi","Cleveland","克利夫兰","Quicken Loans Arena","E","Central"),
new Team("DET",7,8,11,"pistons",       "Pistons","活塞","huo sai","Detroit","底特律","Little Caesars Arena","E","Central"),
new Team("IND",8,11,12,"pacers",       "Pacers","步行者","bu xing zhe","Indiana","印第安纳","Bankers Life Fieldhouse","E","Central"),
new Team("MIA",9,14,2,"heat",          "Heat","热火","re huo","Miami","迈阿密","American Airlines Arena","E","Southeast"),
new Team("MIL",10,15,13,"bucks",       "Bucks","雄鹿","xiong lu","Milwaukee","密尔沃基","BMO Harris Bradley Center","E","Central"),
new Team("NYK",11,18,4,"knicks",       "Knicks","尼克斯","ni ke si","New York","纽约","Madison Square Garden","E","Atlantic"),
new Team("ORL",12,19,5,"magic",        "Magic","魔术","mo shu","Orlando","奥兰多","Amway Arena(Orlando Arena)","E","Southeast"),
new Team("PHI",13,20,6,"sixers",       "76ers","76人","76 ren","Philadelphia","费城","Wells Fargo Center","E","Atlantic"),
new Team("TOR",14,28,15,"raptors",     "Raptors","猛龙","meng long","Toronto","多伦多","Air Canada Centre","E","Atlantic"),
new Team("WAS",15,27,7,"wizards",      "Wizards","奇才","qi cai","Washington","华盛顿","Capital One Arena","E","Southeast"),
new Team("DAL",16,6,16,"mavericks",    "Mavericks","独行侠","du xing xia","Dallas","达拉斯","American Airlines Center","W","Southwest"),
new Team("DEN",17,7,17,"nuggets",      "Nuggets","掘金","jue jin","Denver","丹佛","Pepsi Center","W","Northwest"),
new Team("GSW",18,9,28,"warriors",     "Warriors","勇士","yong shi","Golden State","金州","Oakland Arena","W","Pacific"),
new Team("HOU",19,10,18,"rockets",     "Rockets","火箭","huo jian","Houston","休斯顿","Toyota Center","W","Southwest"),
new Team("LAC",20,12,29,"clippers",    "Clippers","快船","kuai chuan","Los Angeles","洛杉矶","Staples Center","W","Pacific"),
new Team("LAL",21,13,24,"lakers",      "Lakers","湖人","hu ren","Los Angeles","洛杉矶","Staples Center","W","Pacific"),
new Team("MEM",22,29,19,"grizzlies",   "Grizzlies","灰熊","hui xiong","Memphis","孟菲斯","FedExForum","W","Southwest"),
new Team("MIN",23,16,20,"timberwolves","Timberwolves","森林狼","sen lin lang","Minnesota","明尼苏达","Target Center","W","Northwest"),
new Team("NOP",24,3,14,"pelicans",     "Pelicans","鹈鹕","ti hu","New Orleans","新奥尔良","Smoothie King Center(New Orleans Arena)","W","Southwest"),
new Team("OKC",25,25,27,"thunder",     "Thunder","雷霆","lei ting","Oklahoma City","俄克拉荷马城","Chesapeake Energy Arena","W","Northwest"),
new Team("PHX",26,21,26,"suns",        "Suns","太阳","tai yang","Phoenix","菲尼克斯","Talking Stick Resort Arena","W","Pacific"),
new Team("POR",27,22,25,"blazers",     "Trail Blazers","开拓者","kai tuo zhe","Portland","波特兰","Moda Center","W","Northwest"),
new Team("SAC",28,23,23,"kings",       "Kings","国王","guo wang","Sacramento","萨克拉门托","Golden 1 Center","W","Pacific"),
new Team("SAS",29,24,21,"spurs",       "Spurs","马刺","ma ci","San Antonio","圣安东尼奥","AT&T Center(SBC Center)","W","Southwest"),
new Team("UTA",30,26,22,"jazz",        "Jazz","爵士","jue shi","Utah","犹他","Vivint Smart Home Arena","W","Northwest")];

function ig(x){x=x?x:"0";return "<img class='teamlogo' alt='"+x+"' src=\"assets/logo/"+x+".png\">";}

function getQiudui()
{
    var tx=function(x){return x.en+"@"+x.ec+" "+x.cc+"<br>"+x.eSt+"<br>分区: "+x.div;};
    var o="",i,j;
    for(i=0;i<6;i++)
    {
        o+="<tr>\n";
        for(j=i*5;j<i*5+5;j++)
        {
            o+="<td style='max-width:33px;'>"+ig(_TEAMS[j].idT)+"</td>";
            o+="<td><a href=\"http://nba.stats.qq.com/team/?id="+_TEAMS[j].code+"\" target=\"_blank\" ";
            o+="data-toggle=\"tooltip\" title=\""+tx(_TEAMS[j])+"\">";
            if(_TEAMS[j].cn.length>2){o+="<small>"+(_TEAMS[j].cn==="凯尔特人"?"凯尔<br>特人":_TEAMS[j].cn)+"</small>";}
            else{o+=_TEAMS[j].cn;}
            o+="</a></td>";
        }
        o+="</tr>\n";
    }
    $("#divTeams").html("<table class='table table-striped table-condensed'>"+o+"</table>");
    $(function(){$("[data-toggle='tooltip']").tooltip({html:true});});
	console.log(document.getElementById("divTeams"));
}


var ajson;
var stime,etime;
var esp=0.0000000001;

function cellTeam(m)
{
	console.log(m);
	var o="";
	var gn=function(x,y){return x?x.replace("Timberwolves","Timber wolves"):y;};
	if(m.type==="NBA季后赛")
	{
		o="<strong>"+gn(m.en,m.cn)+"</strong>&nbsp;"+m.score;
	}
	else{o="<strong>"+gn(m.en,m.cn)+"</strong>";}
	if(m.side==="l")
	{
		o="<td style='width:35px;padding:2px;'>"+ig(m.id)+"</td><td style='width:95px;padding:2px;'>"+o+"</td>";
	}
	else
	{
		o="<td style='width:95px;padding:2px;'>"+o+"</td><td style='width:35px;padding:2px;'>"+ig(m.id)+"</td>";
	}
	return o;
}

function selMatch(m,s)
{
	if(s===0)
	{
		return {
			id:m.leftId,cn:m.leftName,en:m.leftEnName,
			type:m.matchDesc,score:m.leftScore,
			period:m.matchPeriod,side:"l"
		};
	}
	else
	{
		return {
			id:m.rightId,cn:m.rightName,en:m.rightEnName,
			type:m.matchDesc,score:m.rightScore,
			period:m.matchPeriod,side:"r"
		};
	}
}

function cellGoal(m,idx,ord)
{
	if(m.matchPeriod==="0")
    {
		return "<td><a href=\"http://nba.stats.qq.com/compare/index.htm?type=team&teamId="+m.leftId+","+m.rightId+"\" target=\"_blank\">对&nbsp;比</a></td>";
	}
	else
	{
		var l=Number(m.leftGoal),r=Number(m.rightGoal);
		var t=(l>r)?("<strong>"+l+"∶</strong>"+r):((l<r)?l+"<strong>∶"+r+"</strong>":l+":"+r);
		var o="<a href='game.html?mid="+m.mid.substr(7)+"' target='_blank'>"+t+"</a>";
		var s="<canvas id='C"+idx+String.fromCharCode(ord+65)+"' width='180' height='28'></canvas>";
		o="<div style='width:100%'>"+o+"</div><div style='width:100%'>"+s+"</div>";
		return "<td style='padding:3px;'>"+o+"</td>";
	}
}

function cellVideo(m)
{
	var o="<a target='_blank' href=\"http://kbs.sports.qq.com/kbsweb/game.htm?mid=";
	var gp=function(x){return "<small><span class='glyphicon glyphicon-"+x+"'></span></small>";};
	if(m.matchPeriod==="1")
	{
		o=(m.isPay==="1"?gp("usd"):gp("facetime-video"))+o+m.mid+"\"><strong>直播</strong></a>";
		return "<td style='width:60px'>"+o+"</td>";
	}
	else if(m.matchPeriod==="2")
	{
		if(m.ifHasPlayback==="1")
		{
			o=(m.isPay==="1"?gp("usd"):gp("facetime-video"))+"&nbsp;"+o+m.mid+"&replay=1\">回放</a><br>"+o+m.mid+"\"><strong>集锦</strong></a>";
		}
		else{o=gp("facetime-video")+o+m.mid+"\"><strong>集锦</strong></a>";}
		return "<td style='width:120px'>"+o+"</td>";
	}
	else{return "";}
}

function processTable(idx,t,offset)
{
    var o="";
    var match=[];
	
    o+="<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'><table class='table table-condensed tday'><caption>"+t.day+" "+t[0].week+(t[0].matchDesc==="NBA季后赛"?"&emsp;<span style='background-color:#e1e1e1;font-size: 12px;'>&nbsp;Play Off&nbsp;</span>":"")+"</caption><tbody>";

    for(var i=0;i<t.length;i++)
    {
        if(t[i].matchPeriod==="0")
        {
            o+="<tr>";
            o+="<td style='width:70px;padding-right:3px;'><small>未开始</small> <strong>"+t[i].startTime.substr(11,5)+"</strong></td>";
            o+=cellTeam(selMatch(t[i],0));
            o+=cellGoal(t[i],idx,i);
            o+=cellTeam(selMatch(t[i],1));
			o+="</tr>";
        }
        else if(t[i].matchPeriod==="1")
        {
            match.push([t[i].leftName,t[i].rightName,t[i].leftId,t[i].rightId]);
            o+="<tr>";
            o+="<td style='width:65px;padding-right:1px;' rowspan='2'><strong>"+t[i].quarter+"</strong> <small>"+t[i].quarterTime+"</small></td>";
            o+=cellTeam(selMatch(t[i],0));
            o+="<td id='L"+idx+String.fromCharCode(i+65)+"'></td>";
            o+=cellGoal(t[i],idx,i);
            o+=cellVideo(t[i]);
            o+=cellTeam(selMatch(t[i],1));
            o+="</tr>";
        }
        else
        {
            match.push([t[i].leftName,t[i].rightName,t[i].leftId,t[i].rightId]);
            o+="<tr>";
            o+="<td style='width:65px;padding-right:1px;padding-left:3px;'><strong>"+t[i].quarter+"</strong><br><small>已结束</small></td>";
            o+=cellTeam(selMatch(t[i],0));
            if(t[i].latestNews&&t[i].latestNews.title)
            {
                o+="<td style='width:50px;'><a target='_blank' href='"+t[i].latestNews.url+"' data-toggle=\"tooltip\" title=\""+t[i].latestNews.title.replace(" ","<br>")+"\" data-placement=\"right\"><strong>战报</strong></a></td>";
            }
            else{o+="<td style='width:50px;'>无战报</td>";}
            o+=cellGoal(t[i],idx,i);
            o+=cellVideo(t[i]);
            o+=cellTeam(selMatch(t[i],1));
            o+="</tr>";
        }
    }
    o+="</tbody></table></div>";
	
    $("#divD").append(o);
    $(function(){$("[data-toggle='tooltip']").tooltip({html:true});});
	
    if(offset<=0)
    {
        console.log("https://nba.hupu.com/match/nba?offset="+offset);
        $.ajax({
            url: "get.php",
            type: "GET",
            dataType: "json",
			data:{opt:"hupu",offset:offset},
            success: function (t)
            {
                var a=eval(t);console.log(a);
                console.log("get hupu.data:");console.log(a=a.data.list);
                drawTable(a,match,idx);
            },
            error:function(t)
            {
                var a=eval("("+t.responseText+")");console.log(a);
                console.log("get hupu.data:");console.log(a=a.data.list);
                drawTable(a,match,idx);
            }
        });
    }
}

function drawTable(s,m,d)
{
    for(var i=0;i<s.length;i++)
    {
        for(var j=0;j<m.length;j++)
		{
            if(m[j][0]===s[i].away_name&&m[j][1]===s[i].home_name){m[j][4]=s[i];break;}
        }
    }
    for(i=0;i<m.length;i++)
    {if(m[i][4]&&m[i][4].race)
    {
        draw("C"+d+String.fromCharCode(i+65),m[i][4].race,m[i][2],m[i][3]);
        if(document.getElementById("L"+d+String.fromCharCode(i+65)))
        {
            document.getElementById("L"+d+String.fromCharCode(i+65)).innerHTML="<a target='_blank' href='"+m[i][4].playbyplay_link+"'>文字</a>";
        }
    }}
}

function getT(t){var s=function(a,b){a=a.toString();while(a.length<b){a="0"+a;}return a;};var o="";o+=s(t.getFullYear(),4)+'-';o+=s(t.getMonth()+1,2)+'-';o+=s(t.getDate(),2);return o;}

function aj(d)
{
    stime=getT(d);d.setDate(d.getDate()+6);etime=getT(d);
    var sr="http://matchweb.sports.qq.com/kbs/list?from=NBA_PC&columnId=100000&startTime="+stime+"&endTime="+etime+"&callback=ajaxExec";
    console.log(sr);
    $.ajax({
        url: sr,type: "GET",
        dataType: "jsonp",jsonpCallback: "ajaxExec",
		cache:false,
        success: function (t)
        {
            ajson=eval(t);
            console.log("get ajson.data:");console.log(ajson=ajson.data);
            var t0=24*3600000,cnt=0;
            var d0=new Date(getT(new Date()));
            document.getElementById("divD").innerHTML="";
            for(var i in ajson)
            {
                if(i.indexOf("20")>=0)
                {
                    ajson[i].day=i;
                    var dd=new Date(i);
                    processTable(cnt++,ajson[i],Math.floor((dd.getTime()-d0.getTime())/t0));
                }
            }
        }
    });
}

function init()
{
    getQiudui(); 
    $("#mainC").css("margin-top",($("#heaD").height()+15)+"px");
    $("#mainC").css("width",window.innerWidth+"px");
    console.log("init AJAX begin");
    aj(new Date());
    $("#datetimepicker").datetimepicker({ 
        format: "yy-M-dd",
        minView: "month",
        maxView: "month",
        todayBtn: "true",
        todayHighlight :"true",
        startDate: new Date("2017/12/1"),
    });
    $("#datetimepicker").datetimepicker().on("changeDate",function(m){console.log(m);aj(m.date);});
    console.log("init Quote begin");
    $.ajax({
        url: "get.php",
        type: "GET",
        dataType: "text",
		data: "opt=statnba&seed="+Math.random(),
        success: function (t)
        {
            console.log("get Quote: "+t);
            document.getElementById("qut").innerHTML=t;
        }
    });
}

function draw(idd,r,x,y)
{
    var c=document.getElementById(idd);  
    var ctx=c.getContext("2d");
	var img;
    if(r.length>0)
    {
        r.min=999;r.max=-999;
        for(var i=0;i<r.length;i++)
        {
            r.min=Math.min(r.min,-r[i]);
            r.max=Math.max(r.max,-r[i]);
        }
        r.maxx=r.max;r.minn=-r.min;
        r.min=Math.min(r.min,0);r.max=Math.max(r.max,0);
        
        var w0=30,w=c.width-w0;
        var h=c.height,h0=h*(r.max+esp)/(r.max-r.min+esp);
        var d1=Math.max(0,(r.max+esp)/(r.max-r.min+esp)-esp),d2=Math.min(1,(r.max+esp)/(r.max-r.min+esp)+esp);
        var g=ctx.createLinearGradient(0,0,0,h);
            g.addColorStop(0,"#8B1A1A");
            g.addColorStop(d1/1.3,"#FF3030");
            g.addColorStop(d1,"#FFA500");
            g.addColorStop(d2,"#00BFFF");
            g.addColorStop(0.4*d2+0.6,"#1874CD");
            g.addColorStop(1,"#0000FF");
        ctx.fillStyle=g;
        for(i=0;i<r.length;i++){ctx.fillRect(w0+w*i/r.length,h0,w/r.length-0.25,h0*r[i]/(r.max+esp));}

        ctx.font="12px Consolas";ctx.fillStyle="#000";
        img=new Image();img.src="assets/logo/"+x+".png";ctx.drawImage(img,0,0,15,15);
        ctx.fillText(r.maxx,15,11);
        img=new Image();img.src="assets/logo/"+y+".png";ctx.drawImage(img,0,h-16,15,15);
        ctx.fillText(r.minn,15,h-3);
    }
    else
    {
        ctx.font="16px Consolas";
        ctx.fillText("no data",40,20);
    }
}

$(document).ready(init());
