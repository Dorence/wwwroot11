// JavaScript Document
var nn=[0,0,0,0,0,0];
var tim=new Date();
var mySeed=tim.getTime()-Date.UTC(2015,1,1);
console.log(mySeed);
var my_chance=Chance(mySeed);

function randd(x,y,nt)
{
    "use strict";
    if(undefined===nt) {nt=1;}
    var z=my_chance.n(my_chance.integer,nt,{min: x, max: y});
    var sum=0;
    for(var k=0;k<nt;k++){sum+=z[k];}
    var pp=document.getElementById("dres");
    pp.innerHTML=sum;
    if(pp.style.color==="black"){pp.style.color="red";}
    else{pp.style.color="black";}
}

function randdp()
{
    "use strict";
    var tmm=document.getElementById("dtime").value;
    var ttd=document.getElementById("drange").value;
    console.log(tmm+ttd);
    if(undefined===tmm||""===tmm){tmm=1;}
    if(undefined===ttd||""===ttd){ttd=6;}
    if(ttd==="100")
    {
        randd(0,99,tmm);
    }
    else
    {
        randd(1,ttd,tmm);
    }
}

function try04()
{
    "use strict";
    var r=my_chance.integer({min: 0, max: 4});
    nn[5]++;nn[r]++;
    //console.log(r+" "+nn[5]);
    for(var i=0;i<=4;i++)
    {
        var pg=document.getElementById("p"+i),pp=(nn[i]/nn[5]*100).toFixed(5);
        pp=(pp===100.000)?"100%":(pp===0.000?"1em":pp+"%");
        //pg.style.width=pp;
        pg.innerHTML=i+" "+(nn[i]/nn[5]).toFixed(4);
        //$("#p"+i).animate({width: pp},at);
        $("#p"+i).css("width",pp);
        //console.log(pp+" p"+i+" : "+pg.style.width);
    }
}
    
function tryy(){"use strict";for(var i=0;i<10;i++){try04();}}
function tryk(){"use strict";for(var i=0;i<1000;i++){try04();}console.log("done 1k");}
