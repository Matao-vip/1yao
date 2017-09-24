require(['config'],function(){
	require(['jquery','common','same'],function($,com,same){
		// 加载header的内容
		$('#header').load('html/header.html',function(){
			Header();
			$('.h_banner img').prop('src','img/h_banner.jpg');
			$('.h_main .logo a').prop('href','index.html')
			$('.nav_right .one li').first().find('a').prop('href','index.html');
			$('.h_main tdCode img').prop('src','img/2DCodenew2.jpg');
		})
	})
});