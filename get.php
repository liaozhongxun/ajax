<?php
	header('content-type:text/html;charset="utf-8"');
	
	$user = $_GET['user'];
	$pwd = $_GET['pwd'];
	//如果ajax访问这种页面user和pwd没有值得花 就会获取整个页面的多有代码

	echo "欢迎，您的用户名是：{$user}，您的密码是：{$pwd}"

?>