"use strict";

var ajson;
var tinfo=[];

function processTable()
{
    var o1="";
    o1+="<div class=\"media-left media-middle\"><img class='teamlogo-min' alt='"+ajson.teamInfo.leftId+"' src='assets/logo/"+ajson.teamInfo.leftId+".png'></div>";
    o1+="<div class=\"media-body\">";
    o1+="<h4 class=\"media-heading\">"+ajson.teamInfo.leftFullCnName+"</h4>";
    o1+="<p>"+ajson.teamInfo.leftEnName+"<br>"+ajson.teamInfo.leftRank+ajson.teamInfo.leftRecord+"</p>";
    o1+="</div>";
    document.getElementById("teamleft").innerHTML=o1;
    var o2="";
    o2+="<div class=\"media-body\">";
    o2+="<h4 class=\"media-heading\">"+ajson.teamInfo.rightFullCnName+"</h4>";
    o2+="<p>"+ajson.teamInfo.rightEnName+"<br>"+ajson.teamInfo.rightRank+ajson.teamInfo.rightRecord+"</p>";
    o2+="</div>";
    o2+="<div class=\"media-right media-middle\"><img class='teamlogo-min' alt='"+ajson.teamInfo.rightId+"' src='assets/logo/"+ajson.teamInfo.rightId+".png'></div>";
    document.getElementById("teamright").innerHTML=o2;
    document.getElementById("period").innerHTML=scoreTable(ajson.periodGoals);
    document.getElementById("visit").innerHTML=teamTable(ajson.playerStats.left,"V");
    document.getElementById("home").innerHTML=teamTable(ajson.playerStats.right,"H");
}

function cmpp(a,b)
{
    if(a.head){return -1;}
    else if(b.head){return 1;}
    else
    {
        if(a.row[1]==="是"&&b.row[1]==="是"){return a.t<b.t?(-1):1;}
        if(a.row[1]==="是"){return -1;}
        else if(b.row[1]==="是"){return 1;}
        else
        {
            var na=Number(a.row[2]),nb=Number(b.row[2]);//play time
            return (na>nb)?(-1):(na<nb?1:(a.enName<b.enName?(-1):1));
        }
    }
}

function scoreTable(x)
{
    var p=[x.head,x.rows[0],x.rows[1]],l=x.head.length;
    var o=["","",""];
    console.log(p);
    o[0]+="<th style='width:150px;'>Tot</th>";
    if(p[1][l]>p[2][l])
    {
        o[1]+="<td style='font-size:18px;line-height:19px;'><strong>"+p[1][l]+"</strong></td>";
        o[2]+="<td style='font-size:18px;line-height:19px;'>"+p[2][l]+"</td>";
    }
    else if(p[1][l]<p[2][l])
    {
        o[1]+="<td style='font-size:18px;line-height:19px;'>"+p[1][l]+"</td>";
        o[2]+="<td style='font-size:18px;line-height:19px;'><strong>"+p[2][l]+"</strong></td>";
    }
    
    for(var i=1;i<l;i++)
    {
        if(i>4)
        {
            o[0]+="<th>加时"+(i-4)+"</th>";
            o[1]+="<td>"+p[1][i]+"</td>";
            o[2]+="<td>"+p[2][i]+"</td>";
        }
        else
        {
            o[0]+="<th style='width:60px;'>"+p[0][i-1]+"</th>";
            o[1]+="<td>"+p[1][i]+"</td>";
            o[2]+="<td>"+p[2][i]+"</td>";
        }
    }

    console.log(o);
    return "<table class='table table-striped table-condensed' style='max-width:400px;'><tr>"+o[0]+"</tr><tr>"+o[1]+"</tr><tr>"+o[2]+"</tr></table>";
}

function teamTable(x,ti)
{
    var T=function(x,y){return ti+String.fromCharCode(x+65,y+65);};
    for(var l=0;l<x.length;l++){x[l].t=l;}
    x.sort(cmpp);
    console.log(x);
    var o="";
        o+="<tr>";
        o+="<th>球员</th>";
        for(var k=2;k<x[0].head.length;k++)
        {
            o+="<th>"+x[0].head[k]+"</th>";
        }
        o+="</tr>";
    for(var i=1;i<x.length;i++)
    {
        o+="<tr>";
        if(x[i].row[1]==="是")
        {
            o+="<td id='"+T(i-1,0)+"'><strong>"+
            "<a href='http://nba.stats.qq.com/player/?id="+Number(x[i].playerId)+"' target='_blank'>"+x[i].row[0]+"<br><p style='font-size:7px;height:9px;margin:1px;padding:0;'>"+x[i].enName+"</p></a>"+"</strong></td>";
            //console.log(x[i].playerId);
        }
        else{
            o+="<td id='"+T(i-1,0)+"'><a href='http://nba.stats.qq.com/player/?id="+Number(x[i].playerId)+"' target='_blank'>"+x[i].row[0]+"<br><p style='font-size:5px;height:6px;margin-top:1px;margin-bottom:1px;padding:0;'>"+x[i].enName+"</p></a></td>";
        }
        for(var j=2;j<x[i].row.length;j++)
        {
            o+="<td id='"+T(i-1,j-1)+"'>"+x[i].row[j]+"</td>";
        }
        o+="</tr>";
    }
    tinfo.push([ti,x.length-1]);
    console.log(tinfo);
    
    //console.log(o);
    
    var c="<col width='140px'><col span='4' width='45px' valign='middle'><col span='3' width='60px'><col span='2' width='70px'><col span='4' width='50px'>";
    return "<table class='table table-striped table-condensed' style='margin: auto;margin-bottom:20px;'>"+c+"<tbody>"+o+"</tbody></table>";
}

function procBest(m)
{
	console.log("proc MAXP");
	console.log(m);
	var o="";
	
	var pinfo=function(x)
	{
		return "<button class='btn btn-info btn-xs' data-container='body' data-toggle='popover' data-placement='left' data-content=\"<div class='media'><div class='media-left media-middle'><a href='#'><img class='media-object' src='"+x.icon+"' alt='player'></a></div>"+
"<div class='media-body'><h4 class='media-heading'><a href='http://sports.qq.com/nba/player/?id="+x.playerId+"' target='_blank'>"+x.name+
			"</a></h4>#"+x.jerseyNum+"|"+x.position+"</div>"+"</div>\">i</button>&nbsp;";
	};
	
	for(var i=0;i<m.length;i++)
	{
		m[i].lv=Number(m[i].leftVal);
		m[i].rv=Number(m[i].rightVal);
		m[i].ln=(m[i].lv>=m[i].rv)?"<strong>"+m[i].leftPlayer.enName+"</strong>":m[i].leftPlayer.enName;
		m[i].rn=(m[i].lv<=m[i].rv)?"<strong>"+m[i].rightPlayer.enName+"</strong>":m[i].rightPlayer.enName;
		
		o+="<tr>";
		o+="<td style='min-width:40px;'>"+m[i].text+"</td>";
		o+="<td>";
		
		o+=pinfo(m[i].leftPlayer)+m[i].ln+"<br>"+m[i].leftVal+"</td>";
		o+="<td>";
		
		o+=pinfo(m[i].rightPlayer)+m[i].rn+"</a><br>"+m[i].rightVal+"</td>";
		o+="</tr>";
	}
	console.log(o);
	$("#best").append("<table class='table table-striped table-condensed' style='margin: auto;margin-bottom:20px;'><tbody>"+o+"</tbody></table>");
	$(function(){$('[data-toggle="popover"]').popover({html:true});});
}

function init()
{
    console.log("init AJAX begin!");
    $.ajax({
        url: "http://sportswebapi.qq.com/kbs/matchStat",
        type: "GET",dataType: "jsonp",
		data:{
			from:"nba_database",
			selectParams:"teamRank,periodGoals,playerStats,maxPlayers,nbaPlayerMatchTotal",
			mid:"100000:"+location.href.split("?")[1].split("mid=")[1]
		},
        success: function (t)
        {
            ajson=eval(t);console.log(ajson);
            console.log("get ajson.data:");console.log(ajson=ajson.data);
            processTable();
			procBest(ajson.maxPlayers);
        }
    });
    console.log("init AJAX end!");
}

$(document).ready(init());
