require(['config'],function(){
	require(['jquery','common','same','mcarousel'],function($,com,same,mc){
		/************header**************/
		// 加载header的内容
		$('#header').load('html/header.html',function(){
			Header();
			$('.h_banner img').prop('src','img/h_banner.jpg');
			$('.h_main .logo a').prop('href','index.html');
			$('.nav_right .one li').first().find('a').prop('href','index.html');
			$('.h_main .tdCode img').prop('src','img/2DCodenew2.jpg');
			$('#nav .nav_left>a>i').css('display','none');
			$('#nav .nav_left>ul').css('display','block');

		})

		/************banner**************/
		$('#banner .lbt').mCarousel({
			width:750,
			height:400,
			imgs:['img/lbt1.jpg','img/lbt2.jpg','img/lbt3.jpg','img/lbt4.jpg','img/lbt5.jpg','img/lbt6.jpg'],
			type:'horizontal',
			showButton:false
		})

		/************main**************/
		// $('#main')

		/************asideR**************/
		$('#asideR').load('html/asideR.html',function(){
			AsideR();
		})

		/************footer**************/
		// 加载footerd内容
		$('#footer').load('html/footer.html',function(){})

	})
});