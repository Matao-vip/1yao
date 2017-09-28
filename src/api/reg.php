<?php
	include 'connect.php';
	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	$isreg = isset($_GET['isreg']) ? $_GET['isreg'] : false;

	// 查看用户是否已经存在
	$sql="select username from user where username='$username'";

	$result = $conn->query($sql);
	
	if($result->num_rows>0){
		echo "fail";
	}else{
		if($isreg){
			// 密码md5加密
			$password = md5($password);
			// echo $password;
			$sql="insert into user (username,password) values('$username','$password')";
			$result = $conn->query($sql);
			if($result){
				echo "ok";
			}else{
				// echo "Error: " . $sql . "<br>" . $conn->error;
				echo "no";
			}
		}else{
			echo "success";
		}
	}
	$conn->close();
?>