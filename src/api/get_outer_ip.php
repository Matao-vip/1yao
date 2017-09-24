<?php
	$url = 'http://1212.ip138.com/ic.asp';
	$content = file_get_contents($url);

	//修改编码
	$content = iconv('gb2312','utf-8',$content);

	// 正则匹配ip
	preg_match('/\[([\d\.]+)\]/',$content,$res);

	// var_dump($res[1]);

	echo $res[1];
?>