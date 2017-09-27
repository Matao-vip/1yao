<?php
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = '111_database';

	$conn=new mysqli($servername,$username,$password,$database);

	if($conn->connect_errno){
		die('连接失败：'.$conn->connect_error);
	}
	$conn->set_charset('utf8');
?>