<?php
header("Content-type:application/json");
if(is_array($_GET)&&count($_GET)>0)
{
   if(isset($_GET["opt"]))
   {
	    if($_GET["opt"]=="hupu")
	    {
			$r="https://nba.hupu.com/match/nba?offset=".$_GET["offset"];
			$s=file_get_contents($r);
			echo str_replace("\"code\":1","\"code\":\"1\"",$s);
	    }
		else if($_GET["opt"]=="statnba")
		{
			$r="http://www.stat-nba.com/ajax/quote.php?seed=".$_GET["seed"];
			$s=file_get_contents($r);
			$s = str_replace("<strong>NBA经典语录</strong><br/>\n","",$s);
			$s = str_replace("/player/","http://www.stat-nba.com/player/",$s);
			$s = preg_replace('/\s{2,}/'," ", $s);
			echo $s;
	    }
	    else{echo "{\"error\":\"error GET opt\"}";}
   }
}
else{echo "{\"error\":\"no GET data\"}";}
?>