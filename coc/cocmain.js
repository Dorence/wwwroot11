// JavaScript Document
var discText=[
"<strong>年龄:</strong><br><table style=\"width:98%;\"><tr><th>教育</th><th>效果</th></tr><tr><td>15-19</td><td>力量和体型合计减5,教育减5;<br>决定幸运值时可以骰2次并取较好的一次</td></tr><tr><td>20-39</td><td>教育１次增强检定</td></tr><tr><td>40-49</td><td>教育２次增强检定,力量体质敏捷合计减5,外貌减5</td></tr><tr><td>50-59</td><td>教育３次增强检定,力量体质敏捷合计减10,外貌减10</td></tr><tr><td>60-69</td><td>教育４次增强检定,力量体质敏捷合计减20,外貌减15</td></tr><tr><td>70-79</td><td>教育４次增强检定,力量体质敏捷合计减40,外貌减20</td></tr><tr><td>80-89</td><td>教育４次增强检定,力量体质敏捷合计减80,外貌减25</td></tr></table>教育增强检定:掷1D100,若结果大于你当前的教育值,则增加1d10(不超过99)",//0
"<strong>出生地:</strong><br>大多数故事发生在新英格兰,只要你愿意,你可以选择该地;当然你的调查员可以起源于世界各地,任何国家地点都不会给予你的调查员额外的优势或劣势,这个选择会影响其它事物:打个比方,出生于老美或加拿大的调查员可以很容易选择英语作为母语,而出生于魁北克的调查员则可以在幼年时学习法语,而亚利桑那州的调查员又能学习西班牙语或纳瓦霍语,出生于圣弗朗西斯科的调查员可以学习粤语。",//1
"<strong>力量STR:</strong><br>0:衰弱,没法站起来甚至端起一杯茶<br>15:弱者,虚弱;&nbsp;&nbsp;50:普通人水平;<br>90:你见过的力气最大的;<br>99:世界水平(奥赛举重冠军),人类极限;<br>140:超越人类之力(如大猩猩/马);<br>200+:怪物之力(如格拉基)",//2
"<strong>体质CON:</strong><br>0:死亡｡<br>1:病弱｡卧床不起,没有协助就无法自已｡<br>15:健康堪忧,经常需躺下休息,常年疼痛缠身｡<br>50:普通人水平｡<br>90:抖落身上的液氮,强壮而精神｡<br>99:铁之刚体｡可以承受住最强的疼痛｡人类极限｡<br>140:超越人类之体格(大象)｡<br>200+:怪物之体,免疫大部分地球疾病(如尼约格萨)",//3
"<strong>体型SIZ:</strong><br>1:婴儿(1~12磅);<br>15:孩童,或身短体瘦(矮人)(33磅/15kg)｡<br>65:普通人类体型(中等身高和体重)(170磅/75kg)｡<br>80:非常高,强健的体格或非常胖(240磅/110kg)｡<br>99:某方面已经是超大号(330磅/150kg)｡<br>150:马或牛(960磅/436kg)｡<br>180:记录中最重的人类(1400磅/634kg)｡<br>200+:1920磅/872kg(如昌格纳·方庚)",//4
"<strong>敏捷DEX:</strong><br>0:没有协助无法移动<br>15:缓慢,笨拙,无法行动自如;<br>50:普通人水平;<br>90:高速而灵活,可以达成超凡的技艺(如杂技演员,伟大的舞者);<br>99:世界级运动员,人类极限;<br>120:超越人类之速(如虎)｡<br>200+:闪电之速,可以在人类反应过来之前完成一系列动作",//5
"<strong>外貌APP:</strong><br>0:难看,他人会对你报以恐惧､厌恶和怜悯｡<br>15:挫｡估计是因为受伤事故或先天如此｡<br>50:普通人水平｡<br>90:你见过的最漂亮的人,有着天然的吸引力｡<br>99:魅力和酷的巅峰(超级名模或世界影星),人类极限;<br>注意:外貌只有人类使用,且无法超过99",//6
"<strong>智力INT:</strong><br>智力决定了调查员的兴趣技能点的数量(INT*２),智力同样影响着灵感检定和智力检定;<br>0:没有智商,无法理解周遭的世界;<br>15:学得很慢,只能理解最常用的数字,或阅读学前教育级别的书｡<br>50:普通人水平｡<br>90:超凡之脑,可以理解多门语言或法则｡<br>99:天才(爱因斯坦､达芬奇､特斯拉等),人类极限;<br>140:超越人类之智(如远古者);<br>210+:怪物之智,可以理解并操作多重次元(如伟大之克苏鲁)",//7
"<strong>意志POW:</strong><br>0:弱者的心,没有意志力,没有魔法潜能;<br>15:意志力弱,经常成为高智力或高意志人士的人偶或玩物｡<br>50:普通人;<br>90:坚强的心,对沟通不可视之物和魔法有着高潜质;<br>100:钢铁之心,与灵能领域和不可视世界有着强烈的链接;<br>140如超越人类,基本上是异界存在(如依格)｡<br>210+:怪物的魔法潜质和力量,超越凡人之理解力(如伟大之克苏鲁);<br>注:人类的意志可以超过100,但这是特例",//8
"<strong>教育EDU:</strong><br>0:新生儿;<br>15:任何方面都没有受过教育｡<br>60:高中毕业;&nbsp;&nbsp;70:大学毕业(专科学位);<br>80:研究生毕业(硕士学位);<br>90:博士学位,教授;<br>96:某研究领域的世界级权威;<br>99:人类极限",//9
"<strong>疯狂状态:</strong><br>一次失去5点及更多理智,守秘人要求调查员进行一次智力检定,如果检定失败,那么调查员将会压抑自己的真实记忆(保护自己)并且不会进入疯狂状态;如果通过检定,那么他将会进入[临时性疯狂],这将会使他持续精神错乱1d10小时;<br>一天之内失去当前理智的1/5或更多是,进入[不定性疯狂],这将会一直持续到角色被治愈或者恢复为止;<br>理智跌落至0及以下,进入[永久性疯狂],守密人将接管永久疯狂的调查员;<br><a href=\"javascript:void(0);\" onClick=\"showinfo(14)\">理智点损失范例</a>",//10
"<strong>性别:</strong><br>男性或女性;两者既没有规则上的不同点,也不会有任何优缺点.<br>玩家请尊重你的本心选择性别,而不要考虑战术上的问题;当然一些特殊模组和剧本会在特殊历史时期和上流社会上因性别而有所区别对待",//11
"<strong>幸运:</strong><br>掷3D6×5<br>如果调查员年龄在15-19之间，掷两次，取较大值;<br>上限为99",//12
"<strong>伤害加值和体格表:</strong><table style=\"width:98%;\"><tr><th>力量+体型</th><th>伤害加值</th><th>体格</th></tr><tr><td>2-64</td><td colspan='2'>-2</td></tr><tr><td>65-84</td><td colspan='2'>-1</td></tr><tr><td>85-124</td><td colspan='2'>0</td></tr><tr><td>125-164</td><td>+1d4</td><td>1</td></tr><tr><td>165-204</td><td>+1d6</td><td>2</td></tr><tr><td>205-284</td><td>+2d6</td><td>3</td></tr><tr><td>285-364</td><td>+3d6</td><td>4</td></tr><tr><td>365-444</td><td>+4d6</td><td>5</td></tr><tr><td>445-524</td><td>+5d6</td><td>6</td></tr></table>此后力量+体型值每超过80点,增加1d6伤害加值和1体格",//13
"<table style=\"width:99%;\"><tr><th colspan='2'>理智点损失范例</th></tr><tr><td>0/1D2</td><td>发现撕碎的动物尸体</td></tr><tr><td>0/1D3</td><td>发现尸体的一部分</td></tr><tr><td>0/1D4</td><td>看到一地鲜血</td></tr><tr><td>1/1D4+1</td><td>发现一具血肉模糊的尸体</td></tr><tr><td>0/1D6</td><td>醒来时发现被困在棺材中</td></tr><tr><td>0/1D6</td><td>目击朋友因为暴力而死亡</td></tr><tr><td>0/1D6</td><td>看到一只食尸鬼</td></tr><tr><td>1/1D6+1</td><td>与你认为已经死去的人相遇</td></tr><tr><td>0/1D10</td><td>遭受严刑拷打</td></tr><tr><td>1/1D10</td><td>看到死尸复活</td></tr><tr><td>2/2D10+1</td><td>目击从天而降的尸雨</td></tr><tr><td>1D10/1D100</td><td>直视克苏鲁</td></tr></table>",//14
    "",//15
    "",//16
    "",//17
    "",//18
    "",//19
    "",//20
    ""
    ];

var attrText=["STR","CON","SIZ","DEX","APP","INT","POW","EDU"];
var attrNum=[0,0,0,0,0,0,0,0];
function SkillT(abbr,name,hiddenx,inipoint)
{
    "use strict";
    this.abbr = abbr;
    this.name = name;
    this.hiddenx = hiddenx;
    this.pnt = [isNaN(inipoint)?
                !function(){switch(inipoint){case "DEX/2":return attrNum[3]/2;case "EDU":return attrNum[7];default: return 0;}}
                :inipoint,
                0,0,0];
    this.totp = function(){
        var tot=0;
        for(var i=0;i<4;i++)
        {
            if(this.pnt[i]<0) {this.pnt[i]=0;}
            if(this.pnt[i]>99) {this.pnt[i]=99;}
            this.pnt[i]=Math.floor(this.pnt[i]);
            tot+=this.pnt[i];
        }
        return tot;
    };
    this.showpos = function(){
        var tot=0;
        for(var i=0;i<4;i++)
        {
            if(this.pnt[i]<0) {this.pnt[i]=0;}
            if(this.pnt[i]>99) {this.pnt[i]=99;}
            this.pnt[i]=Math.floor(this.pnt[i]);
            tot+=this.pnt[i];
        }
        return tot+" / "+Math.floor(tot/2)+" / "+Math.floor(tot/5);
    };
}

var skiN=[ //skill normal
    new SkillT("AU","会计 Accounting",0,5),//0
    new SkillT("AN","人类学 Anthropology",1,1),
    new SkillT("AP","估价 Appraise",0,5),
    new SkillT("AR","考古学 Archaeology",1,1),
    new SkillT("NA","魅惑 Charm",0,15),
    new SkillT("NB","攀爬 Climb",0,20),//5
    new SkillT("NU","计算机使用 Computer Use Ω",1,5),
    new SkillT("NR","信用评级 Credit Rating",0,0),
    new SkillT("NC","克苏鲁神话 Cthulhu Mythos",1,0),
    new SkillT("DI","乔装 Disguise",0,5),
    new SkillT("DO","闪避 Dodge",0,"DEX/2"),//10
    new SkillT("DA","汽车驾驶 Drive Auto",0,20),
    new SkillT("EP","电气维修 Electrical Repair",0,10),
    new SkillT("EL","电子学 Electronics Ω ",1,1),
    new SkillT("NF","话术 Fast Talk",0,5),
    new SkillT("FI","急救 First Aid",0,30),//15
    new SkillT("HI","历史 History",0,5),
    new SkillT("IN","恐吓 Intimidate",0,15),
    new SkillT("JP","跳跃 Jump",0,20),
    new SkillT("LO","语言-母语 Language-Own",0,"EDU"),
    new SkillT("LA","法律 Law",0,5),//20
    new SkillT("LU","图书馆使用 Library Use",0,20),
    new SkillT("LN","聆听 Listen",0,20),
    new SkillT("LS","锁匠 Locksmith",1,1),
    new SkillT("MR","机械维修 Mechanical Repair",0,10),
    new SkillT("MD","医学 Medicine",1,1),//25
    new SkillT("NW","博物学 Natural World",0,10),
    new SkillT("NA","领航 Navigate",0,10),
    new SkillT("OC","神秘学 Occult",0,5),
    new SkillT("OM","操作重型机械 Operate Heavy Machinery",1,1),
    new SkillT("PE","说服 Persuade",0,10),//30
    new SkillT("PA","精神分析 Psychoanalysis",1,1),
    new SkillT("PS","心理学 Psychology",0,10),
    new SkillT("RD","骑术 Ride",0,5),
    new SkillT("XD","妙手 Sleight of Hand",0,10),
    new SkillT("XP","侦查 Spot Hidden",0,25),//35
    new SkillT("XH","潜行 Stealth",0,20),
    new SkillT("XW","游泳 Swim",0,20),
    new SkillT("XT","投掷 Throw",0,20),
    new SkillT("XR","追踪 Track",0,10)//39
    /*new SkillT("","",0,0),*/
];

var skiB=[ //skill brunched
    [   
        new SkillT("AC","艺术和手艺 Art & Craft",0,"NULL"), //main Art & Craft
        new SkillT("TA","表演 Acting",0,5),
        new SkillT("TG","书法 Calligraphy?",1,5),
        new SkillT("TC","木匠 Carpenter?",1,5),
        new SkillT("TP","写作 Composition?",1,5),
        new SkillT("TK","厨艺 Cooking?",1,5),
        new SkillT("TN","粉刷匠和油漆工 Craftsman & Painter?",1,5),
        new SkillT("TD","舞蹈 Dancing?",1,5),
        new SkillT("TF","美术 Fine Art",0,5),
        new SkillT("TE","伪造 Forgery",0,5),
        new SkillT("TH","理发 Hairdressing?",1,5),
        new SkillT("TM","莫里斯舞蹈 Morris Dancing?",1,5),
        new SkillT("TO","歌剧歌唱 Opera?",1,5),
        new SkillT("TP","摄影 Photography",0,5),
        new SkillT("TY","制陶 Pottery?",1,5),
        new SkillT("TS","雕塑 Sculpture",1,5),
        new SkillT("TV","吹真空管 Vacuum-Tube Blower",0,5),           
    ],
    [
        new SkillT("SI","科学 Science",0,"NULL"), //main Science
        new SkillT("SA","天文学 Astronomy",1,1),
        new SkillT("SB","生物学 Biology",0,1),
        new SkillT("SY","植物学 Botany",1,1),
        new SkillT("SC","化学 Chemistry",0,1),
        new SkillT("SR","密码学 Cryptography",1,1),
        new SkillT("SE","工程学 Engineering",1,1),
        new SkillT("SF","司法科学 Forensics",1,1),
        new SkillT("SG","地质学 Geology",0,1),
        new SkillT("SM","数学 Mathematics",0,1),
        new SkillT("ST","气象学 Meteorology",1,1),
        new SkillT("SH","药学 Pharmacy",1,1),
        new SkillT("SP","物理学 Physics",0,1),  
        new SkillT("SZ","动物学 Zoology",1,1)
    ],
    [
        new SkillT("FT","格斗 Fighting",0,"NULL"), //main Fighting
        new SkillT("FA","斧头 Axe",1,15),
        new SkillT("FB","斗殴 Brawl",0,25),
        new SkillT("FC","电锯 Chainsaw",1,10),
        new SkillT("FF","链枷 Flail",1,10),
        new SkillT("FG","绞索 Garrote",1,15),
        new SkillT("FP","矛 Spear",1,20),
        new SkillT("FS","剑 Sword",0,20),
        new SkillT("FW","鞭子 Whip",1,5)
    ]
    
    /*
    射击
    语言（其他）
    生存
    驾驶
    */
];

var skiU=[ //skill unusual
    new SkillT("UH","动物驯养 Animal Handling",0,5),
    new SkillT("UA","炮术 Artillery",1,1),
    new SkillT("UD","爆破 Demolitions",1,1),
    new SkillT("UV","潜水 Diving",1,2),
    new SkillT("UH","催眠 Hypnosis",1,1),
    new SkillT("UR","读唇 Read Lips",1,1)
];


function showinfo(indexi)
{
    "use strict";
    var para=document.getElementById("infoshowHere");
    para.innerHTML=discText[indexi];
}

function readAttr()
{
    "use strict";
    var ipp;
    for(var i=0;i<attrText.length;i++)
    {
        ipp=parseInt(document.getElementById(attrText[i]).value);
        attrNum[i]=isNaN(ipp)?0:ipp;
        //console.log(attrText[i]+" : "+attrNum[i]);
    }
}

function calcGD()
{
	"use strict";
	var dbv=document.getElementById("DBP"),bdv=document.getElementById("BLD");
	var a=attrNum[0]+attrNum[2];//str+siz
	console.log("STR+SIZ : "+a);
	if(a<2){dbv.innerHTML=bdv.innerHTML="?";}
	else if(a<65){dbv.innerHTML=bdv.innerHTML="-2";}
	else if(a<85){dbv.innerHTML=bdv.innerHTML="-1";}
	else if(a<125){dbv.innerHTML=bdv.innerHTML="0";console.log("0"+dbv.innerHTML+bdv.innerHTML);}
	else if(a<165){dbv.innerHTML="+1d4";bdv.innerHTML=1;}
	else if(a<205){dbv.innerHTML="+1d6";bdv.innerHTML=2;}
	else{
		a=Math.floor((a-205)/80);
		dbv.innerHTML="+"+(a+2)+"d6";bdv.innerHTML=a+3;
	}
}

function initSkill()
{
    "use strict";
    var divc=document.getElementById("skillcontainer");
    var o="<br><table cellspacing=\"0\" cellpadding=\"0\"><col width=\"250\"><col width=\"40\" span=\"4\"><col width=\"120\"><tr><th colspan=\"6\">技能表</th></tr><tr><td width=\"240\"><strong>技能名称</strong></td><td width=\"40\">初始</td><td width=\"40\">成长</td><td width=\"40\">职业</td><td width=\"40\">兴趣</td><td width=\"120\"><strong>成功率</strong></td></tr>";
    o+="<tr><th colspan=\"6\">常规技能</th></tr>";
    var t;
    for(var i=0;i<skiN.length;i++)
    {
        t=skiN[i];
        if(t.hiddenx===0)
        {
            o+="<tr id=\"tr"+t.abbr+"\"><td>"+t.name+" "+t.abbr+"</td>";
            for(var iii=0;iii<4;iii++)
            {
                o+="<td>"+(t.pnt[iii]===false?"0":t.pnt[iii])+"</td>";
            }
            o+="<td>"+t.showpos()+"</td></tr>";
        }
    }
    o+="<tr><th colspan=\"6\">分支技能</th></tr>";
    for(var i=0;i<skiB.length;i++)
    {
        t=skiB[i];
        if(t[0].hiddenx===0)
        {
            o+="<tr><td colspan=\"6\"><strong>"+t[0].name+" "+t[0].abbr+"</strong></td></tr>";
            for(var ii=1;ii<t.length;ii++)
            {
                if(t[ii].hiddenx===0)
                {
                    o+="<tr id=\"tr"+t[ii].abbr+"\"><td>"+t[ii].name+" "+t[ii].abbr+"</td>";
                    for(var iii=0;iii<4;iii++)
                    {
                        o+="<td>"+(t[ii].pnt[iii]===false?"0":t[ii].pnt[iii])+"</td>";
                    }
                    o+="<td>"+t[ii].showpos()+"</td></tr>";
                }
            }
            
        }
    }
    o+="<tr><th colspan=\"6\">非常规技能</th></tr>";
    for(var i=0;i<skiU.length;i++)
    {
        t=skiU[i];
        if(t.hiddenx===0)
        {
            o+="<tr id=\"tr"+t.abbr+"\"><td>"+t.name+" "+t.abbr+"</td>";
            for(var iii=0;iii<4;iii++)
            {
                o+="<td>"+(t.pnt[iii]===false?"0":t.pnt[iii])+"</td>";
            }
            o+="<td>"+t.showpos()+"</td></tr>";
        }
    }
    o+="</table><br>";
    divc.innerHTML=o;
}


function refreshAttr()
{
    "use strict";
    readAttr();
    for(var i=0;i<attrText.length;i++)
    { 
        document.getElementById(attrText[i]+"2").innerHTML=Math.floor(attrNum[i]/2);
        document.getElementById(attrText[i]+"5").innerHTML=Math.floor(attrNum[i]/5);
    }
    var agev=document.getElementById("playerage").value,
        movv=document.getElementById("MOVV");
    var cnt=((attrNum[0]<attrNum[2])&&(attrNum[3]<attrNum[2]))?7:
        (
            ((attrNum[0]>attrNum[2])&&(attrNum[3]>attrNum[2]))?9:
			( ((attrNum[0]===0)&&(attrNum[1]===0)&&(attrNum[2]===0))?"?":8 )
        );
    console.log("mov Origin : "+cnt);
    if((agev!=="")&&(agev>=90)) {agev=document.getElementById("playerage").value=89;}
    if((agev!=="")&&(agev<15)) {agev=document.getElementById("playerage").value=15;}
    if(agev>=40) {cnt-=Math.floor((agev-30)/10);}
    movv.innerHTML=cnt;
    document.getElementById("hitpnt").innerHTML="/"+Math.floor((attrNum[2]+attrNum[1])/10);
    document.getElementById("sanpnt").innerHTML="/"+attrNum[6];
    document.getElementById("magpnt").innerHTML="/"+Math.floor(attrNum[6]/5);
	calcGD();
    skiN[10].pnt[0]=attrNum[3]/2;//Dodge
    skiN[19].pnt[0]=attrNum[7];//Language-Own
    initSkill();
}


var skillindex=1;

function addopt(x,num,ord)
{
    return "<option value =\""+num+"\">"+ord+" "+x.name+" "+x.abbr+"  "+x.totp()+"%</option>";
}

function selskill(index)
{
    "use strict";
    $("#selbtn"+(skillindex>10?2:skillindex)).removeClass("active");
    $("#selbtn"+(index>10?2:index)).addClass("active");
    skillindex=index;
    var sel=document.getElementById("selskillS");
    var o="";
    var t,cnt=0;
    //console.log("flag : "+index);
    if(index>10)
    {
        t=skiB[index-21];
        for(var i=1;i<t.length;i++)
        {
            if(t[i].hiddenx!==0){o+=addopt(t[i],i,++cnt);}
        }
    }
    else
    {
        t=(index===1?skiN:skiU);
        for(var i=0;i<t.length;i++)
        {
            if(t[i].hiddenx!==0){o+=addopt(t[i],i,++cnt);}
        }        
    }
    if(o.length===0){o="<option>None</option>";}
    sel.innerHTML=o;
}


function initCha()
{
    "use strict";
    var scl=document.getElementById("chaskillS");
    var o="";
    var t,cnt=0;
    for(var i=0;i<skiN.length;i++)
    {
        if(skiN[i].hiddenx===0){o+=addopt(skiN[i],"N"+i,++cnt);}
    }
    for(var i=0;i<skiB.length;i++)
    {
        t=skiB[i];
        var tmpo="";
        for(var ii=1;ii<t.length;ii++)
        {
            if(t[ii].hiddenx===0){tmpo+=addopt(t[ii],"B"+i+ii,++cnt);}
        }
        if(tmpo.length>0)
        {
            o+="<optgroup label=\""+t[0].name+"\">"+tmpo+"</optgroup>";
        }
    }
    for(var i=0;i<skiU.length;i++)
    {
        if(skiU[i].hiddenx===0){o+=addopt(skiU[i],"U"+i,++cnt);}
    }
    if(o.length===0){o="<option>None</option>";}
    scl.innerHTML=o;
}

function addskill()
{
    "use strict";
    if(skillindex===(-1))
    {
        console.log("index 0!");
        return;
    }
    var sel = document.getElementById("selskillS");
    var tmp;
    sel=sel.options[sel.selectedIndex].value;
    console.log("select : "+sel);
    if(skillindex===1)
    {
        skiN[sel].hiddenx=0;
        for(var i=1;i<4;i++)
        {
            tmp=document.getElementById("ss"+i).value;
            skiN[sel].pnt[i]=(undefined===tmp?0:((isNaN(tmp)||tmp.length===0)?0:tmp));
        }
    }
    else if(skillindex===3)
    {
        skiU[sel].hiddenx=0;
        for(var i=1;i<4;i++)
        {
            tmp=document.getElementById("ss"+i).value;
            skiU[sel].pnt[i]=(undefined===tmp?0:((isNaN(tmp)||tmp.length===0)?0:tmp));
        }
    }
    else
    {
        skiB[skillindex-21][sel].hiddenx=0;
        for(var i=1;i<4;i++)
        {
            tmp=document.getElementById("ss"+i).value;
            skiB[skillindex-21][sel].pnt[i]=(undefined===tmp?0:((isNaN(tmp)||tmp.length===0)?0:tmp));
        }
    }
    initSkill();
    selskill(skillindex);
    initCha();
}

function changeskill()
{
    "use strict";
    var sel = document.getElementById("chaskillS");
    var v=sel.options[sel.selectedIndex].value;
    console.log("select : "+v);
    switch(v[0])
    {
        case "N":
            v=v.substr(1);
            for(var i=1;i<4;i++)
            {
                document.getElementById("cs"+i).value=skiN[v].pnt[i];
            }
            break;        
        case "B":
            var t=skiB[v[1]];
            console.log("Brunch : "+v[1]+" "+v.substr(2));
            v=v.substr(2);
            for(var i=1;i<4;i++)
            {
                document.getElementById("cs"+i).value=t[v].pnt[i];
            }
            break;
        case "U":
            v=v.substr(1);
            for(var i=1;i<4;i++)
            {
                document.getElementById("cs"+i).value=skiU[v].pnt[i];
            }
            break;
        default:
            console.log("index 0!");
            for(var i=1;i<4;i++)
            {
                document.getElementById("cs"+i).value="0";
            }
            break;
    }
}

function chaskill()
{
    "use strict";
    var sel = document.getElementById("chaskillS");
    var v=sel.options[sel.selectedIndex].value;
    var tmp;
    console.log("select : "+v);
    switch(v[0])
    {
        case "N":
            v=v.substr(1);
            for(var i=1;i<4;i++)
            {
                tmp=document.getElementById("cs"+i).value;
                skiN[v].pnt[i]=(undefined===tmp?0:((isNaN(tmp)||tmp.length===0)?0:tmp));
            }
            break;        
        case "B":
            var v1=v[1];
            v=v.substr(2);
            console.log("Brunch : "+v1+" "+v);
            for(var i=1;i<4;i++)
            {
                tmp=document.getElementById("cs"+i).value;
                skiB[v1][v].pnt[i]=(undefined===tmp?0:((isNaN(tmp)||tmp.length===0)?0:tmp));
            }
            break;
        case "U":
            v=v.substr(1);
            for(var i=1;i<4;i++)
            {
                tmp=document.getElementById("cs"+i).value;
                skiU[v].pnt[i]=(undefined===tmp?0:((isNaN(tmp)||tmp.length===0)?0:tmp));
            }
            break;
        default:console.log("index 0!");break;
    }
    initSkill();
    initCha();
}

