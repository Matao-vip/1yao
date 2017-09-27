<?php
	include "connect.php";
	$sql="select * from indexgoods";
	$result=$conn->query($sql);
	$row = $result->fetch_all(MYSQLI_ASSOC);
	// var_dump($row);
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>