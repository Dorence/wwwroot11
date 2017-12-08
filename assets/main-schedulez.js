!function()
{
    !function(t)
    {
        var e=
        {
            stringJoint:function(t)
            {
            if(0===arguments.length) {return"";}
            var e=Array.prototype.slice.call(arguments,1);
            return t.replace(/\{(\d+)\}/g,function(t,a){return e[a];});
            },
            Url:
            {
                parse:function(t)
                {
                    t=t||window.location.href;
                    var e=document.createElement("a");
                    return e.href=t,
                    {
                        href:t,
                        protocol:e.protocol,
                        host:e.host,
                        hostname:e.hostname,
                        port:e.port,
                        path:e.pathname+e.search,
                        pathname:e.pathname,
                        search:function()
                        {
                            var t={},a=e.search.substring(1).split("&");
                            for(var i=0;i<a.length;i++){var n=a[i].toString().split("=");t[n[0]]=n[1];}
                            return t;
                        }(),
                        query:e.search,
                        hash:e.hash
                    };
                },
                format:function(t){}
            },
            getUrlParam:function(t,e){return this.Url.parse(e).search[t];},
            Cookie:
            {
                getItem:function(t){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;},
                setItem:function(t,e,a,i,n,s)
                {
                    if(!t||/^(?:expires|max\-age|path|domain|secure)$/i.test(t)) {return!1;}
                    var o="";
                    if(a) {switch(a.constructor)
                    {
                        case Number:o=a===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+a;break;
                        case String:o="; expires="+a;break;
                        case Date:o="; expires="+a.toUTCString();
                    }}
                    return document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+o+(n?"; domain="+n:"")+(i?"; path="+i:"")+(s?"; secure":""),!0;
                },
                removeItem:function(t,e,a){return!(!t||!this.hasItem(t))&&(document.cookie=encodeURIComponent(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(a?"; domain="+a:"")+(e?"; path="+e:""),!0);},
                hasItem:function(t){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie);},
                keys:function()
                {
                    for(var t=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),e=0;e<t.length;e++)
                    {t[e]=decodeURIComponent(t[e]);}
                    return t;
                }
            }
        };
        "function"===typeof define?define("tools",[],function(){return e;}):t.Tools=e;
    }(window),
    !function()
    {
        function t(t,e){return(/string|function/.test(typeof e)?r:o)(t,e);}
        function e(t,a){return"string"!==typeof t&&(a=typeof t,"number"===a?t+="":t="function"===a?e(t.call(t)):""),t;}
        function a(t){return f[t];}
        function i(t){return e(t).replace(/&(?![\w#]+;)|[<>"']/g,a);}
        function n(t,e)
        {
            var a=0;
            if(m(t)){for(var i=t.length;a<i;a++){e.call(t,t[a],a,t);}}
            else {for(a in t){e.call(t,t[a],a);}}
        }
        function s(t,e)
        {
            var a=/(\/)[^\/]+\1\.\.\1/,i=("./"+t).replace(/[^\/]+$/,""),n=i+e;
            for(n=n.replace(/\/\.\//g,"/");n.match(a);){n=n.replace(a,"/");}
            return n;
        }
        function o(e,a){var i=t.get(e)||c({filename:e,name:"Render Error",message:"Template not found"});return a?i(a):i;}
        function r(t,e)
        {
            if("string"===typeof e){var a=e;e=function(){return new d(a);};}
            var i=l[t]=function(a){try{return new e(a,t)+"";}catch(i){return c(i)();}};
            return i.prototype=e.prototype=h,i.toString=function(){return e+"";},i;
        }
        function c(t)
        {
            var e="{Template Error}",a=t.stack||"";
            if(a){a=a.split("\n").slice(0,2).join("\n");}
            else{for(var i in t){a+="<"+i+">\n"+t[i]+"\n\n";}}
            return function(){return"object"===typeof console&&console.error(e+"\n\n"+a),e;};
        }
        var l=t.cache={},
            d=this.String,
            f={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},
            m=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t);},
            h=t.utils={$helpers:{},$include:function(t,e,a){return t=s(a,t),o(t,e);},$string:e,$escape:i,$each:n},
            u=t.helpers=h.$helpers;
        t.get=function(t){return l[t.replace(/^\.\//,"")];};
        t.helper=function(t,e){u[t]=e;};           
        if("function"===typeof define){define("templateModule",[],function(){return t;});}
        else if("undefined"!==typeof exports){module.exports=t;}    
        else{this.template=t;} 
        t("dateHeader",function(t,e){
            "use strict";
            var a=this,i=(a.$helpers,a.$escape),n=t.startDate,s=(t.d,t.g,t.endDate),o="";
            console.log("T : "+n+" "+s);
            return o+='<a href="javascript:;"class="forward">&lt;&nbsp;前七天</a><span class="date">'+i(n.replace(/^(\d{4}\-)/g,""))+" 至 "+i(s.replace(/^(\d{4}\-)/g,""))+'</span><a href="javascript:;"class="backward">后七天&nbsp;&gt;</a>',
            new d(o);
        });
        t("dateMatchList",function(t,e)
        {
            "use strict";
            var a=this,i=(a.$helpers,a.$each),n=t.data,
                s=(t.$value,t.$index,a.$escape),
                o=(t.g,t.item,t.idx,"");
            return i(n,function(t,e)
{
//!!!!!!!!!!begin
        console.log(t);
        var ls=t.data.length;
        console.log("length : "+ls);
var rrs=["http://mat1.gtimg.com/sports/nba/logo/1602/901.png",//worriors
        "http://img1.gtimg.com/sports/pics/hv1/131/116/2220/144385211.png",//cavs
        "http://img1.gtimg.com/sports/pics/hv1/97/80/2242/145806547.png",//raptors
        "http://img1.gtimg.com/sports/pics/hv1/43/116/2220/144385123.png",//pacers
        "http://img1.gtimg.com/sports/pics/hv1/231/116/2220/144385311.png",//spurs
        "http://mat1.gtimg.com/sports/nba/logo/new/",     
        "http://mat1.gtimg.com/sports/nba/logo/1602/",
        "1201.png"
        ];         
var rrr=["assets/logo/9.png","assets/logo/5.png","assets/logo/28.png","assets/logo/11.png",
         "assets/logo/24.png","assets/logo/","assets/logo/","12.png"];
        for(var ii=0;ii<ls;ii++)
        {  
            for(var xx=0;xx<rrs.length;xx++)
            {
                t.data[ii].leftBadge=t.data[ii].leftBadge.replace(rrs[xx],rrr[xx]);
                t.data[ii].rightBadge=t.data[ii].rightBadge.replace(rrs[xx],rrr[xx]);          
            }
            //console.log(ii+"L:"+t.data[ii].leftBadge+" R:"+t.data[ii].rightBadge);
        }
//!!!!!!!!!!end
    o+=' <div class="item"> <div class="';
    o+=s(/\u4eca\u5929/g.test(t.date)?"today":"date");//今天
    o+='"> ';
    o+=s(t.date);
    o+=' </div> <div class="list-time"> <div class="row"> <div class="time">时间</div> <div class="status">状态</div> <div class="visit">客</div> <div class="goal">比分</div> <div class="home">主</div> <div class="jj">集锦</div> <div class="sj">数据</div> <div class="qz-zb">前瞻/战报</div> <div class="zb-hf">直播/回放</div> </div> ',
    i(t.data,function(t,e)
    {
        o+=' <div class="row ';
        if("已结束"===t.matchPeriod)
        {
            if(t.leftGoal-0>t.rightGoal-0){o+='left-win ';}
            else if(t.leftGoal-0<t.rightGoal-0){o+='right-win ';}
        }
        o+=s(e%2===0?"odd":"even")+'" data-mid="'+s(t.mid)+'"> ';
        o+=' <div class="time" data-mid="'+s(t.mid)+'"> ';
        o+=s(t.startTime),
        o+=" ",
        "1"===t.isPay&&(o+='<span class="vip">会员</span>'),
        o+=' </div> <div class="status">',
        o+=s("直播中"===t.matchPeriod?t.quarter:t.matchPeriod),
        o+="</div> ",
        "4"!==t.matchType?(o+=' <div class="visit"> <a href="http://nba.stats.qq.com/team/?id=',
        o+=s(t.leftEnName),
        o+='" target="_blank"> <span class="chname">',
        o+=s(t.leftName),
        o+='</span> <img src="',
        o+=s(t.leftBadge),
        o+='" alt="36x36" class="logo"> </a> </div> <div class="goal"> ',
        "未开始"===t.matchPeriod?
        (
            o+=" ",
            t.leftId<=30&&t.rightId<=30?
            (
                o+=' <a class="link" target="_blank" href="http://nba.stats.qq.com/compare/index.htm?type=team&teamId=',
                o+=s(t.leftId),
                o+=",",
                o+=s(t.rightId),
                o+='">对比</a> <span class="strike"></span> '
            ):
            o+=' <span class="strike" style="display: inline-block;"></span> ',
            o+=" "
        ):(
            o+=' <span class="visit">',
            o+=s(t.leftGoal),
            o+='</span><span>-</span><span class="home">',
            o+=s(t.rightGoal),
            o+="</span> "
        ),
o+=' </div> <div class="home"> <a href="http://nba.stats.qq.com/team/?id=',
o+=s(t.rightEnName),o+='" target="_blank"> <span class="chname">',
o+=s(t.rightName),
o+='</span> <img src="',
o+=s(t.rightBadge),
o+='" alt="36x36" class="logo"> </a> </div> '):
(
    o+=' <div class="visit" style="width: 550px;"> <a href="http://nba.stats.qq.com/team/?id=',
    o+=s(t.leftEnName),
    o+='" target="_blank"> <span style="width: 406px;" class="chname">',
    o+=s(t.leftName),
    o+='</span> <img src="',
    o+=s(t.leftBadge),
    o+='" alt="36x36" class="logo"> </a> </div> '
),
o+=' <div class="jj"> ',
t.jj&&(
        o+=' <a href="',
        o+=s(t.jj),
        o+='" target="_blank">\u96c6\u9526</a>'
    ),
o+=' </div> <div class="sj"> ',
"未开始"!==t.matchPeriod&&"3"!==t.matchType&&"4"!==t.matchType&&(
            o+=' <a href="nbaview.html?mid='+s(t.mid.replace("100000:",""))+'" target="_blank">数据</a> '
    ),
o+=' </div> <div class="qz-zb"> ',
t.latestNews&&(
        o+=" ",
        "1"===t.latestNews.articleType?
            (
                o+=' <a href="',
                o+=s(t.latestNews.url),
                o+='" target="_blank">\u6218\u62a5</a> '):
            "7"===t.latestNews.articleType&&(o+=' <a href="',
                o+=s(t.latestNews.url),
                o+='" target="_blank">\u524d\u77bb</a> '),
            o+=" "),
            o+=' </div> <div class="zb-hf"> ',
            "\u5df2\u7ed3\u675f"===t.matchPeriod?(o+=" ",t.hf&&(
            o+=' <a href="',
            o+=s(t.hf),
            o+='" target="_blank" class="btn end" data-mid="',
            o+=s(t.mid),
            o+='"><i></i>视频回放</a> '),
            o+=" "):"未开始"===t.matchPeriod?(o+=" ","1"===t.liveType?
            (
                o+=' <a href="javascript:;" class="btn pic-coming" data-mid="',
                o+=s(t.mid),
                o+='"><i></i>\u56fe\u6587\u76f4\u64ad</a> '):
            "3"===t.liveType&&(o+=' <a href="javascript:;" class="btn video-coming" data-mid="',
                o+=s(t.mid),
                o+='"><i></i>\u89c6\u9891\u76f4\u64ad</a> '),
            o+=" "):
    "直播中"===t.matchPeriod&&(o+=" ","1"===t.liveType?(o+=' <a href="http://kbs.sports.qq.com/kbsweb/game.htm?mid=',o+=s(t.mid),o+='" target="_blank" class="btn pic-living" data-mid="',o+=s(t.mid),o+='"><i></i>\u6b63\u5728\u76f4\u64ad</a> '):"3"===t.liveType&&(o+=' <a href="http://kbs.sports.qq.com/kbsweb/game.htm?mid=',o+=s(t.mid),o+='" target="_blank" class="btn video-living" data-mid="',
    o+=s(t.mid),o+='"><i></i>\u6b63\u5728\u76f4\u64ad</a> '),
    o+=" "),
    o+=" </div> </div> ";
    });//end i(n,function(t,e)
    o+=" </div> </div> ";
}
        ),
            o+=" ",
            new d(o);
        });//end "dateMatchList"->function(t,e)
    t("teamMatchList",function(t,e){
            "use strict";
            var a=this,
            i=(a.$helpers,a.$each),
            n=t.data,
            s=(t.$value,t.$index,a.$escape),
            o=(t.$,t.g,t.item,t.idx,"");
return i(n,function(t,e){
    o+=' <div class="item" id="m',
    o+=s(t.date.replace(/\u6708$/g,"")),
    o+='"> <div class="',
    o+=s(/\u4eca\u5929/g.test(t.date)?"today":"date"),
    o+='"> ',
    o+=s(t.date),
    o+=' </div> <div class="list-team"> <div class="row"> <div class="time">\u65f6\u95f4</div> <div class="visit">\u5ba2\u961f</div> <div class="goal">\u6bd4\u5206</div> <div class="home">\u4e3b\u961f</div> <div class="status">\u8d5b\u679c</div> <div class="jj">\u96c6\u9526</div> <div class="sj">\u6570\u636e</div> <div class="qz-zb">\u524d\u77bb/\u6218\u62a5</div> <div class="zb-hf">\u76f4\u64ad/\u56de\u653e</div> </div> ',
    i(t.data,function(t,e){o+=" ","\u5df2\u7ed3\u675f"===t.matchPeriod?(o+=" ",t.leftGoal-0>t.rightGoal-0?(o+=' <div class="row left-win ',
        o+=s(e%2===0?"odd":"even"),o+='" data-mid="',o+=s(t.mid),o+='"> '):t.leftGoal-0<t.rightGoal-0?(o+=' <div class="row right-win ',
    o+=s(e%2===0?"odd":"even"),o+='" data-mid="',o+=s(t.mid),o+='"> '):(o+=' <div class="row ',o+=s(e%2===0?"odd":"even"),o+='" data-mid="',o+=s(t.mid),o+='"> '),o+=" "):(o+=' <div class="row ',o+=s(e%2===0?"odd":"even"),o+='" data-mid="',o+=s(t.mid),o+='"> '),o+=' <div class="time" data-mid="',o+=s(t.mid),o+='"> ',o+=s(t.startTime),
        o+=" ","1"==t.isPay&&(o+=' <span class="vip">会员</span> '),o+=' </div> <div class="visit"> <a href="http://nba.stats.qq.com/team/?id=',o+=s(t.leftEnName),o+='" target="_blank" bosszone="SC_tcTeam"> <span class="chname">',o+=s(t.leftName),o+='</span> <img src="',
        o+=s(t.leftBadge),o+='" alt="36x36" class="logo"> </a> </div> <div class="goal"> ',"未开始"===t.matchPeriod?(o+=' <a class="link" target="_blank" href="http://nba.stats.qq.com/compare/index.htm?type=team&teamId=',
    o+=s(t.leftId),o+=",",o+=s(t.rightId),o+='">对比</a> <span class="strike"></span> '):(o+=' <span class="visit">',o+=s(t.leftGoal),o+='</span><span>-</span><span class="home">',o+=s(t.rightGoal),o+="</span> "),o+=' </div> <div class="home"> <a href="http://nba.stats.qq.com/team/?id=',
        o+=s(t.rightEnName),
        o+='" target="_blank"> <span class="chname">',o+=s(t.rightName),o+='</span> <img src="',
        o+=s(t.rightBadge),
        o+='" alt="36x36" class="logo"> </a> </div> <div class="status" data-status="',
        o+=s(t.matchPeriod),
        o+='">',
        o+=s(t.status),
        o+='</div> <div class="jj"> ',
        t.coverCollection&&(
            o+=' <a href="',
            o+=s(t.coverCollection.playUrl),
            o+='" target="_blank">\u96c6\u9526</a> '),
        o+=' </div> <div class="sj"> ',
        "未开始"!==t.matchPeriod&&"3"!==t.matchType&&(
            
            o+=' <a href="nbaview.html?mid=',//o+=' <a href="http://nba.stats.qq.com/nbascore/?mid=',
            o+=s(t.mid.replace(/^100000\:/g,"")),
            o+='" target="_blank">\u6570\u636e</a> '),
o+=' </div> <div class="qz-zb"> ',t.latestNews&&(o+=" ","1"===t.latestNews.articleType?(o+=' <a href="',o+=s(t.latestNews.url),o+='" target="_blank" bosszone="SC_tczb">\u6218\u62a5</a> '):"7"===t.latestNews.articleType&&(o+=' <a href="',o+=s(t.latestNews.url),o+='" target="_blank" bosszone="SC_tcqz">\u524d\u77bb</a> '),o+=" "),o+=' </div> <div class="zb-hf"> ',
"\u5df2\u7ed3\u675f"===t.matchPeriod?(o+=" ",t.coverPlayback&&(
        o+=' <a href="',
        o+=s(t.coverPlayback.playUrl),
        o+='" target="_blank" class="btn end" data-mid="',
        o+=s(t.mid),
        o+='"><i></i>视频回放</a> '
    ),
o+=" "):"未开始"===t.matchPeriod?(o+=" ","1"==t.liveType?(o+=' <a href="javascript:;" class="btn pic-coming" data-mid="',o+=s(t.mid),o+='"><i></i>\u56fe\u6587\u76f4\u64ad</a> '):"3"==t.liveType&&(o+=' <a href="javascript:;" class="btn video-coming" data-mid="',o+=s(t.mid),o+='" bosszone="SC_tcLive1"><i></i>\u89c6\u9891\u76f4\u64ad</a> '),o+=" "):"直播中"===t.matchPeriod&&(o+=" ","1"==t.liveType?(o+=' <a href="http://kbs.sports.qq.com/kbsweb/game.htm?mid=',
o+=s(t.mid),
o+='" target="_blank" class="btn pic-living" data-mid="',
o+=s(t.mid),
o+='"><i></i>\u6b63\u5728\u76f4\u64ad</a> '):"3"==t.liveType&&(o+=' <a href="http://kbs.sports.qq.com/kbsweb/game.htm?mid=',o+=s(t.mid),o+='" target="_blank" class="btn video-living" data-mid="',
o+=s(t.mid),
o+='"><i></i>\u6b63\u5728\u76f4\u64ad</a> '),
o+=" "),
        o+=" </div> </div> ";}),
        o+=" </div> </div> "}),
    o+=" ",new d(o)})
    }(),
    define("config.data",[],function(){return{seasonID:2017,seasonText:"2017-2018\u8d5b\u5b63NBA\u8d5b\u7a0b",seasonType:"常规赛",range:["2017-10-01","2018-04-12"]}}),
    define
    (
        "dataCtrl",["jquery","promise","moment","config.data"],
        function(t,e,a,i)
        {
            var n,s,o=!1,
                r=function(e,a,i,n){o=!0,t.ajax({type:"get",async:!0,url:e,dataType:"jsonp",jsonpCallback:n||"ajaxExec",success:function(t){a(t)},error:function(){i()}})},
                c=function(t)
                {
                    switch(t)
                    {
                        case"76ers":t="sixers";break;
                        case"Trail Blazers":t="blazers";
                    }
                    return(t+"").toLowerCase();
                },
                l=function(t,e,a,i,n){e/=1,i/=1;var s;return n==t?(s=e,s>i?"\u80dc":"\u8d1f"):(s=i,s>e?"\u80dc":"\u8d1f")},
                d=function(t){var e="http://sportswebapi.qq.com/kbs/calendar?from=NBA_PC&columnId=100000";n?t(n):r(e,function(e){if(0!==e.code)throw o=!1,new Error("calendar's interface exception.");a("2016-10-02").isAfter(a(e.data.today))&&(e.data.today="2016-10-02"),n=e.data,t(n),o=!1},function(){})},
                f=function(a,i,l)
                {
                    o=!0;
                    var d=new e(
                        function (e, a) {
                            if (s) e(s);
                            else {
                                var i = "http://mat1.gtimg.com/apps/hpage2/web_pass_15_day_match.json";
                                t.ajax({
                                    url: i,
                                    type: "GET",
                                    dataType: "jsonp",
                                    jsonpCallback: "getCastData",
                                    success: function (t) {
                                        if (0 !== t.code) throw a(), new Error("fetch 15 days interface exception.");
                                        s = t.data, e(s)
                                    },
                                    error: function () {}
                                })
                            }
                        }jsonp",
           
 jsonpCallback: "getCastData",
            success: function (t) {
                if (0 !== t.code) throw a(), new Error("fetch 15 days interface exception.");
                s = t.data, e(s)
            },
            error: function () {}
        })
    }
}),
                        f=new e(function(t,e){var n="http://matchweb.sports.qq.com/kbs/list?from=NBA_PC&columnId=100000&startTime="+a+"&endTime="+i;
                    r(n,
                        function(a){if(0!==a.code)throw e(),new Error("calendar's interface exception.");t(a.data)},
                        function(t){e()})});
                    e.all([d,f]).then(function(e){var a=e[0],i=e[1],
                    s=function(t)
                    {
                        switch(t){
                            case"星期一":t="\u5468\u4e00";break;//星期一 周一
                            case"星期\u4e8c":t="\u5468\u4e8c";break;
                            case"星期\u4e09":t="\u5468\u4e09";break;
                            case"星期\u56db":t="\u5468\u56db";break;
                            case"星期\u4e94":t="\u5468\u4e94";break;
                            case"星期\u516d":t="\u5468\u516d";break;
                            case"星期\u65e5":t="\u5468\u65e5";break;
                            default:t=""
                        }
                        return t
                    },
                    r=[];
                t.each(i,function(e,i)
                    {
                    var o={},l=[],d=a?a[e]:void 0;t.each(i,function(t,e){for(var a=["mid","startTime","matchPeriod","matchType","quarter","leftBadge","leftName","leftEnName","leftGoal","leftId","rightBadge","rightGoal","rightName","rightEnName","rightId","isPay","latestNews","week","liveType"],i={},n=0,o=a.length;n<o;n++)
                    {var r=a[n];"startTime"===r?i[r]=e[r].split(" ")[1].replace(/(\:\d{2})$/g,""):"matchPeriod"===r?i[r]="0"===e[r]?"未开始":"1"===e[r]?"直播中":"\u5df2\u7ed3\u675f":"latestNews"===r?e[r]&&(i[r]=e[r]):"week"===r?i[r]=s(e[r]):/EnName/g.test(r)?i[r]=c(e[r]):i[r]=e[r]}
                                if(d){var f=d[t];i.jj=f.coverCollection?f.coverCollection.playUrl:"",i.hf=f.coverPlayback?f.coverPlayback.playUrl:""}
                                l.push(i)});
                    var f=e.split("-");l.length>0?o.date=f[1]+"\u6708"+f[2]+"\u65e5 "+l[l.length-1].week:o.date=f[1]+"\u6708"+f[2]+"\u65e5",e===n.today&&(o.date=o.date+"\uff08\u4eca\u5929\uff09"),o.data=l,r.push(o)}),o=!1,l(r)})
                },
                m=function(e,a){var n="http://mat1.gtimg.com/apps/hpage2/nbateammatchlist_"+e+".json",
            s=["startTime","isPay","leftId","leftBadge","leftName","leftEnName","leftGoal","rightId","rightGoal","rightName","rightEnName","rightBadge","matchPeriod","matchType","mid","liveType","latestNews","coverCollection","coverPlayback"];r(n,function(n){var r=[];t.each(n,function(a,n){if(parseInt(a.split("-").join(""))>=i.range[0].replace("-","").substring(0,6)-0){var o={};o.date=a.replace(/^(\d{4}\-)/g,"")+"\u6708",
                o.data=[],
                t.each(n,function(t,a)
                    {
                        for(var i={},n=0,r=s.length;n<r;n++)
                        {
                            var d=s[n];
                            "startTime"===d?
                                i[d]=a[d].replace(/^(\d{4}\-)/g,"").replace(/(\:\d{2})$/g,""):
                                "matchPeriod"===d?(i[d]="0"==a[d]?"未开始":"1"==a[d]?"直播中":"\u5df2\u7ed3\u675f","\u5df2\u7ed3\u675f"===i[d]?i.status=l(a.leftId,a.leftGoal,a.rightId,a.rightGoal,e):i.status=""):
                                "latestNews"===d||"coverCollection"===d||"coverPlayback"===d?a[d]&&(i[d]=a[d]):/EnName/g.test(d)?i[d]=c(a[d]):i[d]=a[d]
                        }
                        o.data.push(i)
                    }),
                r.push(o)}}),o=!1,a(r)},function(t){o=!1},"getCastData")},h={};
                t.each(_QQNBA_TEAM_IDS,function(t,e){h[e.kbs_id]=e.ch_name});
                var u=function(t){return h[t]};
                return{isLoading:function(){return o},getTodayDate:d,getTeamMatchData:m,getTeamNameById:u,getMatchesByDate:f}
        }
    ),
    define
    (
        "subscriber", ["jquery"],
        function (t)
        {
            Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
                var a;
                if (null == this) throw new TypeError('"this" is null or not defined');
                var i = Object(this),
                    n = i.length >>> 0;
                if (0 === n) return -1;
                var s = +e || 0;
                if (Math.abs(s) === 1 / 0 && (s = 0), s >= n) return -1;
                for (a = Math.max(s >= 0 ? s : n - Math.abs(s), 0); a < n;) {
                    if (a in i && i[a] === t) return a;
                    a++
                }
                return -1
            }), Array.prototype.filter || (Array.prototype.filter = function (t) {
                "use strict";
                if (void 0 === this || null === this) throw new TypeError;
                var e = Object(this),
                    a = e.length >>> 0;
                if ("function" != typeof t) throw new TypeError;
                for (var i = [], n = arguments.length >= 2 ? arguments[1] : void 0, s = 0; s < a; s++)
                    if (s in e) {
                        var o = e[s];
                        t.call(n, o, s, e) && i.push(o)
                    }
                return i
            });
            var e = {
                _data: [],
                getSubInfo: function (e) {
                    if (this._data.length) e && e(this._data);
                    else {
                        var a = this;
                        t.ajax({
                            url: "http://sportswebapi.qq.com/kbs/attendMids",
                            type: "GET",
                            dataType: "jsonp",
                            data: {
                                from: "NBA_PC"
                            },
                            success: function (t) {
                                0 == t.code ? a._data = t.data : a._data = [], e && e(a._data)
                            },
                            error: function () {
                                e && e([])
                            }
                        })
                    }
                },
                isSub: function (t) {
                    return !!this._data.length && this._data.indexOf(t) > -1
                },
                addSub: function (e, a) {
                    if (this._data.indexOf(e) === -1) {
                        var i = this;
                        t.ajax({
                            url: "http://sportswebapi.qq.com/kbs/attend",
                            type: "GET",
                            dataType: "jsonp",
                            data: {
                                type: "attend",
                                mid: e,
                                form: "NBA_PC"
                            },
                            success: function (t) {
                                0 === t.code ? (i._data.push(e), a(!0, e)) : a(!1, e)
                            }
                        })
                    } else a(!0, e)
                },
                delSub: function (e, a) {
                    var i = this._data.indexOf(e);
                    if (i != -1) {
                        var n = this;
                        t.ajax({
                            url: "http://sportswebapi.qq.com/kbs/attend",
                            type: "GET",
                            dataType: "jsonp",
                            data: {
                                type: "cancel",
                                mid: e,
                                form: "NBA_PC"
                            },
                            success: function (t) {
                                if (0 === t.code) {
                                    var s = n._data.slice();
                                    delete s[i], n._data = s.filter(function (t) {
                                        return t
                                    }), a(!0, e)
                                } else a(!1, e)
                            }
                        })
                    } else a(!0, e)
                }
            };
            return e
        }
    ),
    define
    (
        "util",["subscriber"],
    function(t){
        var e=function(t){return $(t).parents(".row").find(".time").find(".order").size()>0};
            return{
                throttle:function(t,e,a){var i,n,s,o=null,r=0;a||(a={});var c=function(){r=a.leading===!1?0:(new Date).getTime(),o=null,s=t.apply(i,n),o||(i=n=null)};return function(){var l=(new Date).getTime();r||a.leading!==!1||(r=l);var d=e-(l-r);
            return i=this,n=arguments,d<=0||d>e?(o&&(clearTimeout(o),o=null),r=l,s=t.apply(i,n),o||(i=n=null)):o||a.trailing===!1||(o=setTimeout(c,d)),s}},
            wordChanging:function(a,i,n){if("未开始"===a){var s="";return s=t.isSub(i)||e(n)?"\u53d6\u6d88\u9884\u7ea6":"\u9884\u7ea6"}}
                  }
               }
    ),
    define("account",["tools"],function(t){var e=function(){return t.Cookie.getItem("skey")&&t.Cookie.getItem("uin")};return{isLogin:e}}),
    define("matchList",["jquery","dataCtrl","templateModule","util","subscriber","account"],function(t,e,a,i,n,s){var o=t(".stream");o.on("mouseenter",".zb-hf",function(e){var a=t(this).parents(".row").find(".status").text()||t(this).parents(".row").find(".status").attr("data-status");if("未开始"===a){var n=t(this).find("a").attr("data-mid"),s=t(this).find("a").html(),o=i.wordChanging(a,n,this);
t(this).find("a").addClass("clock").html("<i></i>"+o).data("beforeTxt",s)}}),o.on("mouseleave",".zb-hf",function(e){var a=t(this).parents(".row").find(".status").text()||t(this).parents(".row").find(".status").attr("data-status");if("未开始"===a){var i=t(this).find("a").data("beforeTxt");t(this).find("a").removeClass("clock").html(i)}}),o.on("click",".zb-hf",function(e){
    e.stopPropagation();
    var a=t(this),o=t(this).parents(".row").find(".status").text()||t(this).parents(".row").find(".status").attr("data-status"),r=t(this).find("a").text(),c=t(this).find("a").attr("data-mid"),l=t(this).find("a").attr("bosszone");
    registerZone2({bossZone:l},"manual"),
    "未开始"===o&&(s.isLogin()?
    "\u9884\u7ea6"===r?
    (
        n.addSub(c,function(t,e){a.parent().find(".time").prepend('<i class="order"></i>'),word=i.wordChanging("未开始",c,a),a.find("a").html("<i></i>"+word)}),
    registerZone2({bossZone:"SC_cyy"},"manual")
    ):
    "\u53d6\u6d88\u9884\u7ea6"===r&&(
        n.delSub(c,function(t,e)
            {
                a.parent().find(".time .order").remove(),
                word=i.wordChanging("未开始",c,a),
                a.find("a").html("<i></i>"+word)
            })//,
        //registerZone2({bossZone:"SC_cqxyy"},"manual")
    ):
    sportsWebApi.userLogin())
}),
    o.on("mouseenter",".row",function(e){t(this).addClass("hover")}),
    o.on("mouseleave",".row",function(e){t(this).removeClass("hover")});
var r=t(".prompt"),c=function(i,n){e.getMatchesByDate(i,n,function(e){
    e.length?
    (
        r.hide(),
        o.css("min-height","1000px").html(a("dateMatchList",{data:e})),
        t(".row").find('a[href="http://nba.stats.qq.com/team/?id=west"],a[href="http://nba.stats.qq.com/team/?id=east"],a[href="http://nba.stats.qq.com/team/?id=world"],a[href="http://nba.stats.qq.com/team/?id=usa"],a[href="http://nba.stats.qq.com/team/?id=undefined"],a[href="http://nba.stats.qq.com/team/?id=west all-stars"],a[href="http://nba.stats.qq.com/team/?id=east all-stars"]').attr("href","javascript:;").css("cursor","default")
    ):(
        o.css("min-height","0px").html(""),
        r.show()
    )})},
l=function(t){t.length?(r.hide(),o.css("min-height","1000px").html(a("teamMatchList",{data:t})),s.isLogin()&&d()):(o.css("min-height","0px").html(""),r.show())},
d=function(){s.isLogin()&&n.getSubInfo(function(e){var a=t(".stream .item .row .time");
t.each(a,function(a,i){var n=t(i).attr("data-mid");n&&e.indexOf(n)>-1&&t(i).prepend('<i class="order"></i>')})})};
return jLogin.on("login",function(){d()}),jLogin.on("logout",function(){}),{rendererByDate:c,rendererByTeam:l}}
    ),
    define
    (
        "Goto",[],function(){var t={util:{getXYScroll:function(){var e=[],a=[];return $.each(t.scrollTarget,function(t,i){var n;n=void 0===$(i).scrollLeft()?0:$(i).scrollLeft(),e.push(n),n=void 0===$(i).scrollTop()?0:$(i).scrollTop(),a.push(n)}),{x:e[0]===e[1]?e[0]:e[0]>e[1]?e[0]:e[1],y:a[0]===a[1]?a[0]:a[0]>a[1]?a[0]:a[1]}},getViewPosition:function(t){if(null===t||void 0===t)return null;var e=document.getElementById(t),a=e.getBoundingClientRect(),i={};
return i.left=a.left||0,i.top=a.top||0,i.right=a.right||0,i.bottom=a.bottom||0,i.width=a.width||a.right-a.left,i.height=a.height||a.bottom-a.top,i}},ctrl:{init:function(e){t.scrollTarget=$("html, body"),t.timing=e.timing,t.offsetTop=e.offsetTop||0,t.offsetLeft=e.offsetLeft||0},"goto":function(e,a){t.containerId=e||null;var i,n,s=t.util.getXYScroll().y;
if(e?(i=t.util.getViewPosition(e).top-t.offsetTop,n=s+i):n=0,a)
{
    var o=$.Deferred();
    o.done(a),
    t.scrollTarget.animate({scrollTop:n},
    t.timing,function(){o.resolve()})
}
else t.scrollTarget.animate({scrollTop:n},t.timing)
}}};
return t}
    ),
    define
    (
        "headline",
        ["jquery","templateModule","dataCtrl","util","matchList","Goto","moment","config.data"],
        function(t,e,a,i,n,s,o,r){function c(e){t.each(w,function(e,a){return a-t(window).scrollTop()>=0?(t(".page-month .month").removeClass("current"),t(t(".page-month .month")[e>=1?e-1:0]).addClass("current"),!1):(t(".page-month .month").removeClass("current"),void t(t(".page-month .month")[w.length-1]).addClass("current"))})}
        var l,d,f=t(".headline .title"),
            m=t("#seasonType"),
            h=(t(".headline .page"),t(".headline .links .team")),
            u=t(".headline .links .calendar"),
            p=t(".headline .links .all"),
            g=t(".headline .links .teams"),
            v=t(".headline .links .goBack");
        h.click(function(t)
            {
                t.stopPropagation(),
                //registerZone2({bossZone:"SC_cTeamSch"},1),
                "none"===g.css("display")?g.show():g.hide()
            }),
        t("body").on("click",function(t){g.hide()}),
        u.click(function(e){
            //registerZone2({bossZone:"SC_cCalendar"},1);
            var a=
            {
                elem:"#datepicker",
                isclear:!1,
                istoday:!1,
                issure:!1,
                choose:function(t)
                {
                    d.startDate!==t&&(d={startDate:t,endDate:o(t).add(6,"days").format("YYYY-MM-DD")},b(d),s.ctrl.init({timing:0,offsetTop:63,offsetLeft:0}),s.ctrl["goto"](),l===d.startDate?v.hide():v.show())
                }
            };
            g.hide(),
            laydate(a),
            t("#laydate_box").on("click","#laydate_today",function(t){v.trigger("click")})
        }),
        p.click(function(t)
        {
            T("date"),
            //ExposureBoss(null,"SC_eAll"),
            s.ctrl.init({timing:0,offsetTop:63,offsetLeft:0}),
            s.ctrl["goto"]()
        }),
        v.click(function(t){l!==d.startDate&&(d={startDate:l,endDate:o(l).add(6,"days").format("YYYY-MM-DD")},b(d),v.hide(),s.ctrl.init({timing:0,offsetTop:63,offsetLeft:0}),
            s.ctrl["goto"]())}),
        g.on("click",".cont a",function(e){
                e.stopPropagation();
                var a=t(this).attr("data-tid");
                v.hide(),T("team",a),
                //ExposureBoss(null,"SC_eTeamSch"),
                g.hide(),
                s.ctrl.init({timing:0,offsetTop:63,offsetLeft:0}),
                s.ctrl["goto"]()
        });
        var b=function(a){t(".headline .page").html(e("dateHeader",a)).removeClass("page-month"),n.rendererByDate(a.startDate,a.endDate),t(window).off("scroll",c)},
            w=[],
            y=function(i){a.getTeamMatchData(i,function(a){t(".headline .page").html(e("teamHeader",{data:a})).addClass("page-month"),n.rendererByTeam(a),w=[],t(".stream .item").each(function(e,a){var i=t(a);w.push(i.offset().top-160)}),t(window).on("scroll",c)})},
            T=function(e,i){
                "team"!=e?f.text(r.seasonText):f.text(r.seasonText+"-"+a.getTeamNameById(i)),r.seasonType?m.text(r.seasonType):m.hide();
                "team"===e?(u.hide(),p.show(),y(i),
                t(".headline .page").on("click","a.month",function(e){t(".headline .month").removeClass("current"),t(this).addClass("current");
                var a="m"+t(this).text().replace(/\u6708$/g,"");
                s.ctrl.init({timing:1e3,offsetTop:113,offsetLeft:0}),s.ctrl["goto"](a)})):"date"===e&&(u.show(),p.hide(),a.getTodayDate(function(e){l=e.today,o(l).isBefore(r.range[0])?l=r.range[0]:o(l).isAfter(r.range[1])&&(l=r.range[1]),d={startDate:l,endDate:o(l).add(6,"days").format("YYYY-MM-DD")},b(d),t(".headline .page").on("click",".forward",function(t){a.isLoading()||(d={startDate:o(d.startDate).subtract(7,"days").format("YYYY-MM-DD"),endDate:o(d.startDate).subtract(1,"days").format("YYYY-MM-DD")},b(d),l===d.startDate?v.hide():v.show(),s.ctrl.init({timing:0,offsetTop:63,offsetLeft:0}),s.ctrl["goto"]())}),t(".headline .page").on("click",".backward",function(t){a.isLoading()||(d={startDate:o(d.endDate).add(1,"days").format("YYYY-MM-DD"),endDate:o(d.endDate).add(7,"days").format("YYYY-MM-DD")},b(d),l===d.startDate?v.hide():v.show(),s.ctrl.init({timing:0,offsetTop:63,offsetLeft:0}),s.ctrl["goto"]())})}));
        var n=t(".headline");
        t(window).scroll(function(){//headline fixed
            t(window).scrollTop()>=160?
            "fixed"!==n.css("position")&&n.css({position:"fixed",top:10,zIndex:1}):
            n.css({position:"static",marginLeft:"auto"})
        })
};
    return{init:T}}),
    define(
        "lift",[],function(){var t={util:{getXYScroll:function(){var e=[],a=[];return $.each(t.scrollTarget,function(t,i){var n;n=void 0===$(i).scrollLeft()?0:$(i).scrollLeft(),e.push(n),n=void 0===$(i).scrollTop()?0:$(i).scrollTop(),a.push(n)}),{x:e[0]===e[1]?e[0]:e[0]>e[1]?e[0]:e[1],y:a[0]===a[1]?a[0]:a[0]>a[1]?a[0]:a[1]}},getViewPosition:function(t){if(null===t||void 0===t)return null;
        var e=document.getElementById(t),a=e.getBoundingClientRect(),i={};
    return i.left=a.left||0,i.top=a.top||0,i.right=a.right||0,i.bottom=a.bottom||0,i.width=a.width||a.right-a.left,i.height=a.height||a.bottom-a.top,i}},ctrl:{init:function(e){t.scrollTarget=$("html, body"),t.timing=e.timing||1e3,t.offsetTop=e.offsetTop||0,t.offsetLeft=e.offsetLeft||0},"goto":function(e){t.containerId=e||null;var a,i,n=t.util.getXYScroll().y;
e?(a=t.util.getViewPosition(e).top-t.offsetTop,i=n+a):(a=n-t.offsetTop,i=0),t.scrollTarget.animate({scrollTop:i},t.timing)}}},
        e={redirect:function(t){t=t||"http://sports.qq.com/nba/",win.location.href=t},throttle:function(t,e,a){var i,n,s,o=null,r=0;a||(a={});var c=function(){r=a.leading===!1?0:(new Date).getTime(),o=null,s=t.apply(i,n),o||(i=n=null)};
            return function()
            {
                var l=(new Date).getTime();r||a.leading!==!1||(r=l);var d=e-(l-r);return i=this,n=arguments,d<=0||d>e?(o&&(clearTimeout(o),o=null),r=l,s=t.apply(i,n),o||(i=n=null)):o||a.trailing===!1||(o=setTimeout(c,d)),s}}
          },
    a={
        init:function(){this.render()},
        render:function(){this.bind()},
        bind:function()
        {
            //$(".lift .list").on("mouseenter","li.app",function(t){$(this).find(".code").css("display","block")}),
            //$(".lift .list").on("mouseleave","li.app",function(t){$(this).find(".code").css("display","none")}),
            //$(".lift .list").on("click","li.arrow",function(e){t.ctrl.init({}),t.ctrl["goto"]()})
            ;
        }
    };
    a.init();
    var i=function()
    {
        var t=$(".lift"),e=$(window).scrollTop();
        $(window).scrollLeft();
        e>=260?t.find(".arrow").css("visibility","visible"):t.find(".arrow").css("visibility","hidden")
    },
    n=e.throttle(i,100,{leading:!1});
    $(window).scroll(function(){n()})}
    ),
    require(["jquery","tools","headline","lift"],
    function(t,e,a)
    {
        var i=e.getUrlParam("team")||"";
        if(i)
        {
            var n=_QQNBA_TEAM_IDS[i].kbs_id;
            a.init("team",n)
        }
        else a.init("date");
    }),
    define("main",function(){});
    var srcr=location.href;
    srcr=srcr.split(/\/nbaschemin.html/)[0];
    console.log("wwwroot : "+srcr);
    require.config({
        baseUrl:"./assets/",
        paths:{
        jquery:srcr+"/assets/jquery-1.12.4.min",
        promise:srcr+"/bluebird-3.5.0.min",
        moment:srcr+"/moment-2.19.1.min",
        tools:"common/tools",
        account:"common/account",
        lift:"common/lift"
        },
        shim:{echarts:{exports:"echarts"}}
    });
    require(["main"]),
    define("config",function(){})
}();
