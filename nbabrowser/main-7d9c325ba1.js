!function(){define("dataCtrl",["jquery"],function(e){var t=function(t,a,r){e.ajax({type:"get",async:!0,url:t,dataType:"jsonp",callback:"ajaxExec",success:function(e){a(e)},error:function(){r()}})},a={allData:"http://sportswebapi.qq.com/kbs/matchStat?from=nba_database&selectParams=teamRank,periodGoals,playerStats,nbaPlayerMatchTotal,maxPlayers&mid=100000:",playerInfo:"http://sportswebapi.qq.com/player/baseInfo?callback=getPlayerData&from=web&playerId=",article:"http://matchweb.sports.qq.com/cms/article?callback=dealLinkMap&mid=100000:"},r=function(e,r){var i=a.playerInfo+e;t(i,function(e){if(0!==e.code)throw new Error("player's interface exception!");r(e.data)},function(e){})},i=function(e,r){var i=a.allData+e;t(i,function(e){0===e.code,r(e)},function(e){})},n=function(e,r){var i=a.article+e;t(i,function(e){0===e.code,r(e.data)},function(e){})},s=function(e,a){var r="http://shequweb.sports.qq.com/topic/getMatchTopics?matchId=100000:"+e;t(r,function(e){0===e.code,a(e.data)},function(e){})};return{getPlayerInfo:r,getMatchData:i,getForumInfoById:s,getMatchArticle:n}}),function(e){var t={stringJoint:function(e){if(0==arguments.length)return"";var t=Array.prototype.slice.call(arguments,1);return e.replace(/\{(\d+)\}/g,function(e,a){return t[a]})},Url:{parse:function(e){e=e||window.location.href;var t=document.createElement("a");return t.href=e,{href:e,protocol:t.protocol,host:t.host,hostname:t.hostname,port:t.port,path:t.pathname+t.search,pathname:t.pathname,search:function(){var e={},a=t.search.substring(1).split("&");for(var r in a){var i=a[r].toString().split("=");e[i[0]]=i[1]}return e}(),query:t.search,hash:t.hash}},format:function(e){}},getUrlParam:function(e,t){return this.Url.parse(t).search[e]},Cookie:{getItem:function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,a,r,i,n){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(a)switch(a.constructor){case Number:s=a===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+a;break;case String:s="; expires="+a;break;case Date:s="; expires="+a.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+s+(i?"; domain="+i:"")+(r?"; path="+r:"")+(n?"; secure":""),!0},removeItem:function(e,t,a){return!(!e||!this.hasItem(e))&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(a?"; domain="+a:"")+(t?"; path="+t:""),!0)},hasItem:function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=0;t<e.length;t++)e[t]=decodeURIComponent(e[t]);return e}}};"function"==typeof define?define("tools",[],function(){return t}):e.Tools=t}(window),!function(){function e(e,t){return(/string|function/.test(typeof t)?o:s)(e,t)}function t(e,a){return"string"!=typeof e&&(a=typeof e,"number"===a?e+="":e="function"===a?t(e.call(e)):""),e}function a(e){return m[e]}function r(e){return t(e).replace(/&(?![\w#]+;)|[<>"']/g,a)}function i(e,t){if(h(e))for(var a=0,r=e.length;a<r;a++)t.call(e,e[a],a,e);else for(a in e)t.call(e,e[a],a)}function n(e,t){var a=/(\/)[^\/]+\1\.\.\1/,r=("./"+e).replace(/[^\/]+$/,""),i=r+t;for(i=i.replace(/\/\.\//g,"/");i.match(a);)i=i.replace(a,"/");return i}function s(t,a){var r=e.get(t)||l({filename:t,name:"Render Error",message:"Template not found"});return a?r(a):r}function o(e,t){if("string"==typeof t){var a=t;t=function(){return new c(a)}}var r=d[e]=function(a){try{return new t(a,e)+""}catch(r){return l(r)()}};return r.prototype=t.prototype=f,r.toString=function(){return t+""},r}function l(e){var t="{Template Error}",a=e.stack||"";if(a)a=a.split("\n").slice(0,2).join("\n");else for(var r in e)a+="<"+r+">\n"+e[r]+"\n\n";return function(){return"object"==typeof console&&console.error(t+"\n\n"+a),t}}var d=e.cache={},c=this.String,m={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},h=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},f=e.utils={$helpers:{},$include:function(e,t,a){return e=n(a,e),s(e,t)},$string:t,$escape:r,$each:i},p=e.helpers=f.$helpers;e.get=function(e){return d[e.replace(/^\.\//,"")]},e.helper=function(e,t){p[e]=t},"function"==typeof define?define("templateModule",[],function(){return e}):"undefined"!=typeof exports?module.exports=e:this.template=e,e("detail",function(e,t){"use strict";var a=this,r=(a.$helpers,a.$escape),i=e.enName,n=e.logo,s=e.teamName,o=a.$each,l=e.data,d=(e.item,e.i,e.iLen),m=(e.record,e.j,"");return m+='<div class="title"> <a href="http://nba.stats.qq.com/team/?id=',m+=r(i),m+='" target="_blank" bosszone="SSSJ_staTeam"> <img src="',m+=r(n),m+='" alt="42x42"/> <h2>',m+=r(s),m+='</h2> </a> </div> <div class="data"> <table> ',o(l,function(e,t){m+=' <tr data-playerid="',m+=r(e.playerId),m+='" class="',m+=r(t===d-1||t===d-2?" dark ":(t+1)%2===1&&t<d-1?"dark ":"light "),m+=" ",m+=r(0===t||6===t?"tit ":" "),m+=" ",m+=r(t===d-2?"total ":t===d-1?"hitrate ":" "),m+='"> ',o(e.row,function(a,i){m+=" ",0===t||6===t?(m+=' <td data-coord="',m+=r(t),m+=",",m+=r(i),m+='" class="',m+=r(i>=2&&i<=4?"bg":""),m+='">',m+=r(a),m+="</td> "):(m+=" ",e.enName&&0===i?(m+=' <td data-coord="',m+=r(t),m+=",",m+=r(i),m+='"> <a href="http://nba.stats.qq.com/player/?id=',m+=r(e.playerId),m+='" target="_blank" bosszone="SSSJ_staPla">',m+=r(a),m+="</a></td> "):(m+=' <td data-coord="',m+=r(t),m+=",",m+=r(i),m+='">',m+=r(a),m+="</td> "),m+=" "),m+=" "}),m+=" </tr> "}),m+=" </table> </div> ",new c(m)}),e("goal",function(e,t){"use strict";var a=this,r=(a.$helpers,a.$escape),i=e.leftEnName,n=e.leftBadge,s=e.leftFullCnName,o=e.leftRank,l=e.leftRecord,d=e.total,m=a.$each,h=e.head,f=(e.$value,e.$index,e.width),p=e.rows,u=(e.val,e.idx,e.rightEnName),v=e.rightBadge,g=e.rightFullCnName,y=e.rightRank,b=e.rightRecord,w="";return w+='<div class="visit"> <a href="http://nba.stats.qq.com/team/?id=',w+=r(i),w+='" target="_blank" bosszone="SSSJ_topTeam"> <img src="',w+=r(n),w+='" alt="70x70"/> <p class="team">',w+=r(s),w+='</p> <p class="rank">',w+=r(o),w+=r(l),w+='</p> </a> </div> <div class="data"> <span class="visitgoal">',w+=r(d[0]),w+='</span> <table> <tr class="bg"> ',m(h,function(e,t){w+=' <td style="width: ',w+=r(f),w+='px;">',w+=r(e),w+="</td> "}),w+=" </tr> ",m(p,function(e,t){w+=" <tr> ",m(e,function(e,t){w+=' <td class="',w+=r(0===t?"bg":""),w+='">',w+=r(e),w+="</td> "}),w+=" </tr> "}),w+=' </table> <span class="homegoal">',w+=r(d[1]),w+='</span> </div> <div class="home"> <a href="http://nba.stats.qq.com/team/?id=',w+=r(u),w+='" target="_blank" bosszone="SSSJ_topTeam"> <img src="',w+=r(v),w+='" alt="70x70"/> <p class="team">',w+=r(g),w+='</p> <p class="rank">',w+=r(y),w+=r(b),w+="</p> </a> </div> ",new c(w)}),e("graph",function(e,t){"use strict";var a=this,r=(a.$helpers,a.$escape),i=e.awayEnName,n=e.awayName,s=e.homeEnName,o=e.homeName,l=a.$each,d=e.data,m=(e.record,e.i,"");return m+='<div class="hint"> <span class="visit"> <a href="http://nba.stats.qq.com/team/?id=',m+=r(i),m+='" target="_blank" bosszone="SSSJ_totalTeam">',m+=r(n),m+='</a> </span> <i class="visit"></i> <span class="home"> <a href="http://nba.stats.qq.com/team/?id=',m+=r(s),m+='" target="_blank" bosszone="SSSJ_totalTeam">',m+=r(o),m+='</a> </span> <i class="home"></i> </div> <div class="bar"> ',l(d,function(e,t){m+=' <div class="item"> <div class="container"> <em class="visit" style="height:',m+=r(e.awayValue),m+='px"> <span>',m+=r(e.awayValue),m+='%</span> </em> <em class="home" style="height:',m+=r(e.homeValue),m+='px"> <span>',m+=r(e.homeValue),m+="%</span> </em> </div> <p>",m+=r(e.name),m+="</p> </div> "}),m+=" </div> ",new c(m)}),e("links",function(e,t){"use strict";var a=this,r=(a.$helpers,e.linkMap),i=e.matchPeriod,n=a.$escape,s="";return s+='<div class="others"> ',r.qz&&"1"===i&&(s+=' <a href="',s+=n(r.qz),s+='" class="qz" target="_blank" bosszone="SSSJ_navQz">\u524d\u77bb</a> '),s+=" ",r.zb&&"2"===i&&(s+=' <a href="',s+=n(r.zb),s+='" class="zb" target="_blank" bosszone="SSSJ_navZb">\u6218\u62a5</a> '),s+=" ",r.jj&&(s+=' <a href="',s+=n(r.jj),s+='" class="jj" target="_blank" bosszone="SSSJ_navJj">\u96c6\u9526</a> '),s+=" ",r.hf&&(s+=' <a href="',s+=n(r.hf),s+='" class="hf" target="_blank" bosszone="SSSJ_navHf">\u56de\u653e</a> '),s+=" </div> ",new c(s)}),e("list",function(e,t){"use strict";var a=this,r=(a.$helpers,a.$each),i=e.rows,n=(e.record,e.i,a.$escape),s="";return s+="<table> ",r(i,function(e,t){s+=" <tr> <td>",s+=n(e.item),s+="</td> ",0===t?(s+=' <td><a href="http://nba.stats.qq.com/team/?id=',s+=n(e.awayEnName),s+='" target="_blank" bosszone="SSSJ_totalTeam">',s+=n(e.awayName),s+="</a></td> "):(s+=" <td>",s+=n(e.visit),s+="</td> "),s+=" ",0===t?(s+=' <td><a href="http://nba.stats.qq.com/team/?id=',s+=n(e.homeEnName),s+='" target="_blank" bosszone="SSSJ_totalTeam">',s+=n(e.homeName),s+="</a></td> "):(s+=" <td>",s+=n(e.home),s+="</td> "),s+=" </tr> "}),s+=" </table> ",new c(s)}),e("optimumData",function(e,t){"use strict";var a=this,r=(a.$helpers,a.$each),i=e.data,n=(e.$value,e.$index,a.$escape),s="";return s+='<div class="title"> <h2>\u5404\u9879\u6700\u4f73</h2> </div> <div class="list"> <table> ',r(i,function(e,t){s+=" ",0===t?(s+=' <tr> <td></td> <td> <a href="http://sports.qq.com/nba/news.htm?type=team&id=',s+=n(e.visitEnName),s+='" target="_blank" bosszone="SSSJ_bestTeam"> ',s+=n(e.visitName),s+=' </a> </td> <td> <a href="http://sports.qq.com/nba/news.htm?type=team&id=',s+=n(e.homeEnName),s+='" target="_blank" bosszone="SSSJ_bestTeam"> ',s+=n(e.homeName),s+=" </a> </td> </tr> "):(s+=" <tr> <td> ",s+=n(e.item),s+=' </td> <td> <span class="player" data-player-id="',s+=n(e.visitID),s+='"> <a href="http://sports.qq.com/nba/player/?id=',s+=n(e.visitID),s+='" target="_blank" bosszone="SSSJ_bestPla" data-pid="',s+=n(e.visitID),s+='" class="mtf">',s+=n(e.visitName),s+='</a> <div style="display: none;" class="card right"></div> </span> <span class="value">',s+=n(e.visitValue),s+='</span> </td> <td> <span class="player" data-player-id="',s+=n(e.homeIDhomeID),s+='"> <a href="http://sports.qq.com/nba/player/?id=',s+=n(e.homeID),s+='" target="_blank" bosszone="SSSJ_bestPla" data-pid="',s+=n(e.homeID),s+='" class="mtf">',s+=n(e.homeName),s+='</a> <div style="display: none;" class="card right"></div> </span> <span class="value">',s+=n(e.homeValue),s+="</span> </td> </tr> "),s+=" "}),s+=" </table> </div> ",new c(s)}),e("playerInfo",function(e,t){"use strict";var a=this,r=(a.$helpers,a.$escape),i=e.playerId,n=e.logo,s=e.cnName,o=(e.g,e.enName),l=e.jerseyNum,d=e.position,m=e.height,h=e.weight,f="";return f+='<a href="http://nba.stats.qq.com/player/?id=',f+=r(i),f+='" target="_blank"> <div class="infos"> <div class="avatar"> <img src="',f+=r(n),f+='" alt=""> </div> <div class="txt"> <p class="chName"> ',f+=r(s.replace(/\-/g," ")),f+=' </p> <p class="enName"> ',f+=r(o),f+=' </p> <p class="sum"># ',f+=r(l),f+=r(d),f+=" |",f+=r(m),f+=",",f+=r(h),f+=" </p> </div> </div> </a> ",new c(f)})}(),define("goal",["jquery","templateModule"],function(e,t){var a={init:function(a){if(a.teamInfo&&a.periodGoals){var r=a.teamInfo;r.leftEnName=r.leftEnName.split(" ").pop().toLowerCase(),r.rightEnName=r.rightEnName.split(" ").pop().toLowerCase(),r.total=[a.periodGoals.rows[0][9],a.periodGoals.rows[1][9]],r.head=["","1st","2nd","3rd","4th","OT1","OT2","OT3","OT4","OT5","OT6","OT7","OT8","OT9","OT10"],r.rows=[[r.leftName],[r.rightName]];for(var i=1;i<8;i++){var n=a.periodGoals.rows[0][i],s=a.periodGoals.rows[1][i];isNaN(n)||(r.rows[0].push(n),r.rows[1].push(s))}r.head=r.head.slice(0,r.rows[0].length),r.width=310/r.head.length,e(".goal").html(t("goal",r))}}};return a}),define("links",["jquery","dataCtrl","templateModule"],function(e,t,a){var r={init:function(r,i){var n=i.teamInfo.matchPeriod;r&&t.getMatchArticle(r,function(s){for(var o={},l=0,d=s.length;l<d;l++){var c=s[l],m="1"===c.type?"qz":"2"===c.type?"zb":"3"===c.type?"jj":"4"===c.type?"hf":"";o[m]||(o[m]=c.url)}o&&"0"!==n&&i.playerStats?e(".links_banner").append(a("links",{linkMap:o,matchPeriod:n})):e(".links_banner").append('<div class="default">\u6682\u65e0\u6bd4\u8d5b\u6570\u636e...</div>'),t.getForumInfoById(r,function(t){t.list&&t.list.length&&e.each(t.list,function(t,a){if(1==a.subtype)return e(".links_banner .others").append('<a href="http://fans.sports.qq.com/post.htm?id='+a.id+"&mid="+a.moduleIds+'" class="lt" target="_blank" bosszone="SSSJ_navSq-zbhd">\u793e\u533a\u76f4\u64ad\u4e92\u52a8</a>'),!1})})})}};return r}),define("table",["jquery","templateModule"],function(e,t){var a={init:function(a){var n={},o={},l=r(a.teamInfo);o.teamName=l.leftFullCnName,o.enName=l.leftEnName.split(" ").pop().toLowerCase(),o.logo=l.leftBadge,n.teamName=l.rightFullCnName,n.enName=l.rightEnName.split(" ").pop().toLowerCase(),n.logo=l.rightBadge;var d={home:{},away:{}};e.each(a.maxPlayers,function(e,t){"\u5f97\u5206"==t.text?(d.home.score=t.rightPlayer.playerId,d.away.score=t.leftPlayer.playerId):"\u52a9\u653b"==t.text?(d.home.assists=t.rightPlayer.playerId,d.away.assists=t.leftPlayer.playerId):"\u7bee\u677f"==t.text&&(d.home.rebounds=t.rightPlayer.playerId,d.away.rebounds=t.leftPlayer.playerId)});var c=i(a);o.data=c.visitData,n.data=c.homeData,o.iLen=c.visitData.length,n.iLen=c.homeData.length,e(".statictis .left .visit").html(t("detail",o)),e(".statictis .left .home").html(t("detail",n)),s(d),this.bind()},bind:function(){var t=e(".statictis .left .visit .data table tr");t.splice(t.size()-2);var a=function(t,a){var r=e(a).attr("data-coord").split(","),i=r[0],n=r[1],s=e(".statictis .left .visit .data table tr");s.splice(s.size()-2);for(var o=0,l=s.size();o<l;o++)if(0===o)n/1!==0&&s.eq(o).find("td").eq(n).addClass("blue_h");else if(o==i&&6!==o){e(a).addClass("check");for(var d=s.eq(o).find("td"),c=0,m=d.size();c<m;c++)0===c?d.eq(c).addClass("blue_v"):d.eq(c).addClass("others_h")}else n/1!==0&&s.eq(o).find("td").eq(n).addClass("others_v")},r=function(t,a){var r=e(a).attr("data-coord").split(","),i=r[0],n=r[1],s=e(".statictis .left .visit .data table tr");s.splice(s.size()-2);for(var o=0,l=s.size();o<l;o++)if(0===o)s.eq(o).find("td").eq(n).removeClass("blue_h");else if(o==i&&6!==o){e(a).removeClass("check");for(var d=s.eq(o).find("td"),c=0,m=d.size();c<m;c++)0===c?d.eq(c).removeClass("blue_v"):d.eq(c).removeClass("others_h")}else s.eq(o).find("td").eq(n).removeClass("others_v")};t.on("mouseenter","td",function(e){a(e,this)}),t.on("mouseleave","td",function(e){r(e,this)});var i=e(".statictis .left .home .data table tr");i.splice(i.size()-2);var n=function(t,a){var r=e(a).attr("data-coord").split(","),i=r[0],n=r[1],s=e(".statictis .left .home .data table tr");s.splice(s.size()-2);for(var o=0,l=s.size();o<l;o++)if(0===o)n/1!==0&&s.eq(o).find("td").eq(n).addClass("blue_h");else if(o==i&&6!==o){e(a).addClass("check");for(var d=s.eq(o).find("td"),c=0,m=d.size();c<m;c++)0===c?d.eq(c).addClass("blue_v"):d.eq(c).addClass("others_h")}else n/1!==0&&s.eq(o).find("td").eq(n).addClass("others_v")},s=function(t,a){var r=e(a).attr("data-coord").split(","),i=r[0],n=r[1],s=e(".statictis .left .home .data table tr");s.splice(s.size()-2);for(var o=0,l=s.size();o<l;o++)if(0===o)s.eq(o).find("td").eq(n).removeClass("blue_h");else if(o==i&&6!==o){e(a).removeClass("check");for(var d=s.eq(o).find("td"),c=0,m=d.size();c<m;c++)0===c?d.eq(c).removeClass("blue_v"):d.eq(c).removeClass("others_h")}else s.eq(o).find("td").eq(n).removeClass("others_v")};i.on("mouseenter","td",function(e){n(e,this)}),i.on("mouseleave","td",function(e){s(e,this)})}},r=function(e){var t=function(e){switch(e){case"76ers":e="sixers";break;case"Trail Blazers":e="blazers"}return(e+"").toLowerCase()},a=function(e,t){var a=new RegExp(t+"$","g");return e.replace(a,"")+" "+t};return e.leftEnName=t(e.leftEnName),e.rightEnName=t(e.rightEnName),e.leftFullCnName=a(e.leftFullCnName,e.leftName),e.rightFullCnName=a(e.rightFullCnName,e.rightName),e},i=function(e){var t=function(e,t,a){for(var r=0,i=e.length;r<i;r++){var s=e[r];if(0===r){var o=s.head;o.shift(),o[0]="\u9996\u53d1\u7403\u5458",s.row=o}else s.row.splice(1,1),s.enName=s.enName.split(" ").join("_")}e.splice(6,0,{row:["\u66ff\u8865\u7403\u5458","\u65f6\u95f4","\u5f97\u5206","\u7bee\u677f","\u52a9\u653b","\u6295\u7bee","\u4e09\u5206","\u7f5a\u7403","\u524d\u573a\u677f","\u540e\u573a\u677f","\u62a2\u65ad","\u76d6\u5e3d","\u5931\u8bef","\u72af\u89c4"]});var l=n(t,a);e.splice(e.length,2,l[0],l[1])};return t(e.playerStats.left,e.nbaPlayerMatchTotal.away,e.periodGoals.rows[0][9]),t(e.playerStats.right,e.nbaPlayerMatchTotal.home,e.periodGoals.rows[1][9]),{visitData:e.playerStats.left,homeData:e.playerStats.right}},n=function(e,t){var a=[],r=e.rebounds,i=e.assists,n=e.fieldGoals+"/"+e.fieldGoalsAttempted,s=e.threePointGoals+"/"+e.threePointAttempted,o=e.freeThrows+"/"+e.freeThrowsAttempted,l=e.offensiveRebounds,d=e.defensiveRebounds,c=e.steals,m=e.blocked,h=e.turnovers,f=e.personalFouls,p=function(e){return e=Math.round(1e3*e)/10,e=(e+"").indexOf(".")>-1?e:e+".0"},u="0"==e.fieldGoalsAttempted?0:p(e.fieldGoals/e.fieldGoalsAttempted),v="0"==e.threePointAttempted?0:p(e.threePointGoals/e.threePointAttempted),g="0"==e.freeThrowsAttempted?0:p(e.freeThrows/e.freeThrowsAttempted);return a.push({row:["\u603b\u8ba1","",t,r,i,n,s,o,l,d,c,m,h,f]}),a.push({row:["\u547d\u4e2d\u7387","","","","",u+"%",v+"%",g+"%","","","","","",""]}),a},s=function(t){e(e('.visit [data-playerid="'+t.away.score+'"] td')[2]).addClass("red"),e(e('.home [data-playerid="'+t.home.score+'"] td')[2]).addClass("red"),e(e('.visit [data-playerid="'+t.away.rebounds+'"] td')[3]).addClass("red"),e(e('.home [data-playerid="'+t.home.rebounds+'"] td')[3]).addClass("red"),e(e('.visit [data-playerid="'+t.away.assists+'"] td')[4]).addClass("red"),e(e('.home [data-playerid="'+t.home.assists+'"] td')[4]).addClass("red")};return a}),define("compare",["jquery","templateModule"],function(e,t){var a={init:function(a){var i=r(a.teamInfo),n=a.nbaPlayerMatchTotal,s={homeName:i.rightName,homeEnName:i.rightEnName.split(" ").pop().toLowerCase(),awayName:i.leftName,awayEnName:i.leftEnName.split(" ").pop().toLowerCase(),data:[{name:"\u6295\u7bee",homeValue:(n.home.fieldGoals/n.home.fieldGoalsAttempted*100).toFixed(1),awayValue:(n.away.fieldGoals/n.away.fieldGoalsAttempted*100).toFixed(1)},{name:"\u4e09\u5206",homeValue:(n.home.threePointGoals/n.home.threePointAttempted*100).toFixed(1),awayValue:(n.away.threePointGoals/n.away.threePointAttempted*100).toFixed(1)},{name:"\u7f5a\u7403",homeValue:(n.home.freeThrows/n.home.freeThrowsAttempted*100).toFixed(1),awayValue:(n.away.freeThrows/n.away.freeThrowsAttempted*100).toFixed(1)}]};e(".statictis .right .compare .graph").html(t("graph",s));var o={rows:[{item:"",homeName:i.rightName,homeEnName:i.rightEnName.split(" ").pop().toLowerCase(),awayName:i.leftName,awayEnName:i.leftEnName.split(" ").pop().toLowerCase()},{item:"\u6295\u7bee",home:n.home.fieldGoals+"/"+n.home.fieldGoalsAttempted,visit:n.away.fieldGoals+"/"+n.away.fieldGoalsAttempted},{item:"\u4e09\u5206",home:n.home.threePointGoals+"/"+n.home.threePointAttempted,visit:n.away.threePointGoals+"/"+n.away.threePointAttempted},{item:"\u7f5a\u7403",home:n.home.freeThrows+"/"+n.home.freeThrowsAttempted,visit:n.away.freeThrows+"/"+n.away.freeThrowsAttempted},{item:"\u7bee\u677f",home:n.home.rebounds,visit:n.away.rebounds},{item:"\u52a9\u653b",home:n.home.assists,visit:n.away.assists},{item:"\u62a2\u65ad",home:n.home.steals,visit:n.away.steals},{item:"\u76d6\u5e3d",home:n.home.blocked,visit:n.away.blocked},{item:"\u5931\u8bef",home:n.home.turnovers,visit:n.away.turnovers}]};e(".statictis .right .compare .list").html(t("list",o))}},r=function(e){var t=function(e){switch(e){case"76ers":e="sixers";break;case"Trail Blazers":e="blazers"}return(e+"").toLowerCase()},a=function(e,t){var a=new RegExp(t+"$","g");return e.replace(a,"")+" "+t};return e.leftEnName=t(e.leftEnName),e.rightEnName=t(e.rightEnName),e.leftFullCnName=a(e.leftFullCnName,e.leftName),e.rightFullCnName=a(e.rightFullCnName,e.rightName),e};return a}),define("best",["jquery","templateModule","dataCtrl"],function(e,t,a){var r={init:function(a){var r=a.teamInfo,i=a.maxPlayers,n=[];n.push({item:"",visitName:r.leftName,visitEnName:r.leftEnName.split(" ").pop().toLowerCase(),homeName:r.rightName,homeEnName:r.rightEnName.split(" ").pop().toLowerCase()});for(var s=0,o=i.length;s<o;s++){var l=i[s],d={};try{d.item=l.text,d.visitValue=l.leftVal,d.homeValue=l.rightVal,d.visitName=l.leftPlayer.name,d.homeName=l.rightPlayer.name,d.visitEnName=l.leftPlayer.enName.split(" ").join("_"),d.homeEnName=l.rightPlayer.enName.split(" ").join("_"),d.visitID=l.leftPlayer.playerId,d.homeID=l.rightPlayer.playerId}catch(c){}n.push(d)}e("#best").html(t("optimumData",{data:n})),this.bind()},bind:function(){var r=e("#best .card");e("#best table tr td").on("mouseenter","span.player",function(i){i.stopPropagation();var n=e(this).attr("data-id");if("true"===e(this).attr("data-loaded"))r.hide(),e(this).find(".card").show();else{r.hide();var n=e(this).find("> a").attr("data-pid"),s=e(this).find(".card");a.getPlayerInfo(n,function(e){e.playerId=n,s.html(t("playerInfo",e)).show().attr("data-loaded","true")})}}),e("#best table tr td").on("mouseleave","span.player",function(e){e.stopPropagation(),r.hide()})}};return r}),define("lift",[],function(){var e={util:{getXYScroll:function(){var t=[],a=[];return $.each(e.scrollTarget,function(e,r){var i;i=void 0===$(r).scrollLeft()?0:$(r).scrollLeft(),t.push(i),i=void 0===$(r).scrollTop()?0:$(r).scrollTop(),a.push(i)}),{x:t[0]===t[1]?t[0]:t[0]>t[1]?t[0]:t[1],y:a[0]===a[1]?a[0]:a[0]>a[1]?a[0]:a[1]}},getViewPosition:function(e){if(null===e||void 0===e)return null;var t=document.getElementById(e),a=t.getBoundingClientRect(),r={};return r.left=a.left||0,r.top=a.top||0,r.right=a.right||0,r.bottom=a.bottom||0,r.width=a.width||a.right-a.left,r.height=a.height||a.bottom-a.top,r}},ctrl:{init:function(t){e.scrollTarget=$("html, body"),e.timing=t.timing||1e3,e.offsetTop=t.offsetTop||0,e.offsetLeft=t.offsetLeft||0},"goto":function(t){e.containerId=t||null;var a,r,i=e.util.getXYScroll().y;t?(a=e.util.getViewPosition(t).top-e.offsetTop,r=i+a):(a=i-e.offsetTop,r=0),e.scrollTarget.animate({scrollTop:r},e.timing)}}},t={redirect:function(e){e=e||"http://sports.qq.com/nba/",win.location.href=e},throttle:function(e,t,a){var r,i,n,s=null,o=0;a||(a={});var l=function(){o=a.leading===!1?0:(new Date).getTime(),s=null,n=e.apply(r,i),s||(r=i=null)};return function(){var d=(new Date).getTime();o||a.leading!==!1||(o=d);var c=t-(d-o);return r=this,i=arguments,c<=0||c>t?(s&&(clearTimeout(s),s=null),o=d,n=e.apply(r,i),s||(r=i=null)):s||a.trailing===!1||(s=setTimeout(l,c)),n}}},a={init:function(){this.render()},render:function(){this.bind()},bind:function(){$(".lift .list").on("mouseenter","li.app",function(e){$(this).find(".code").css("display","block")}),$(".lift .list").on("mouseleave","li.app",function(e){$(this).find(".code").css("display","none")}),$(".lift .list").on("click","li.arrow",function(t){e.ctrl.init({}),e.ctrl["goto"]()})}};a.init();var r=function(){var e=$(".lift"),t=$(window).scrollTop();$(window).scrollLeft();t>=260?e.find(".arrow").css("visibility","visible"):e.find(".arrow").css("visibility","hidden")},i=t.throttle(r,100,{leading:!1});$(window).scroll(function(){i()})}),define("main",["jquery","dataCtrl","tools","goal","links","table","compare","best","lift"],function(e,t,a,r,i,n,s,o){var l=a.getUrlParam("mid");l||(window.location="//nba.stats.qq.com/schedule/"),t.getMatchData(l,function(e){if(0!==e.code)throw new Error("KBS Data Interface error.");
e=e.data,r.init(e),o.init(e),i.init(l,e),n.init(e),s.init(e),"function"==typeof ExposureBoss&&ExposureBoss(null,"SSSJ_s")})}),
require.config(
	{
		//baseUrl:"http://mat1.gtimg.com/libs/jquery/1.11.3/",
		//paths:{jquery:"jquery.min"},
		baseUrl:"http://10.2.70.50/src/js/",
		paths:{jquery:"jquery-1.12.4.min"},
		shim:{}
	}
),
require(["main"]),
define("config",function(){})
}();
//# sourceMappingURL=main-7d9c325ba1.js.map
/*  |xGv00|a1c5bf5b2c0cfd11d7e6b178f9389e29 */