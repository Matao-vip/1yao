<?php
	/*
		api:http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=27.46.236.176
	 */
	$ip = isset($_GET['ip']) ? $_GET['ip'] : '';

	$url = "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=$ip";
	$content = file_get_contents($url);

	$res = json_decode($content,true);

	echo $res['province'];
?>