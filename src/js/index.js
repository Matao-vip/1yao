require(['config'],function(){
	require(['jquery','common','same','mcarousel','jqueryui'],function($,com,same,mc,jui){
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
		$( "#tabs" ).tabs();
		function tabs1(){
			var $tabs1=$('#tabs1');
			var $tabLi=$tabs1.children('ul').find('li');
			var $content=$tabs1.find('.tabs1-0');
			$content.last().hide();
			$tabLi.first().find('a').addClass('active');
			$tabs1.on('click','.clfix li',function(){
				$(this).find('a').addClass('active');
				$(this).siblings('li').find('a').removeClass('active');
				var idx=$(this).index();
				$content.eq(idx).show().siblings('.tabs1-0').hide();
			})
		}
		tabs1();

		/************main**************/
		function Lbt(){
			$('#main .section1 .lbt0').mCarousel({
				width:605,
				height:284,
				imgs:['img/lbt1_1.jpg','img/lbt1_2.jpg','img/lbt1_3.jpg'],
				type:'horizontal',
				showButton:false
			})
			$('#main .section2 .lbt0').mCarousel({
				width:605,
				height:284,
				imgs:['img/lbt2_1.jpg','img/lbt2_2.jpg','img/lbt2_3.jpg'],
				type:'horizontal',
				showButton:false
			})
			$('#main .section3 .lbt0').mCarousel({
				width:605,
				height:284,
				imgs:['img/lbt3_1.jpg','img/lbt3_2.jpg','img/lbt3_3.jpg'],
				type:'horizontal',
				showButton:false
			})
			$('#main .section4 .lbt0').mCarousel({
				width:605,
				height:284,
				imgs:['img/lbt4_1.jpg','img/lbt4_2.jpg','img/lbt4_3.jpg'],
				type:'horizontal',
				showButton:false
			})
			$('#main .section5 .lbt0').mCarousel({
				width:605,
				height:284,
				imgs:['img/lbt5_1.jpg','img/lbt5_2.jpg'],
				type:'horizontal',
				showButton:false
			})
			$('#main .section6 .lbt0').mCarousel({
				width:605,
				height:284,
				imgs:['img/lbt6_1.jpg','img/lbt6_2.jpg','img/lbt6_3.jpg'],
				type:'horizontal',
				showButton:false
			})
			$('#main .section7 .lbt0').mCarousel({
				width:605,
				height:284,
				imgs:['img/lbt7_1.jpg','img/lbt7_2.jpg','img/lbt7_3.jpg'],
				type:'horizontal',
				showButton:false
			})
			$('#main .section8 .lbt0').mCarousel({
				width:605,
				height:284,
				imgs:['img/lbt8_1.jpg','img/lbt8_2.jpg','img/lbt8_3.jpg'],
				type:'horizontal',
				showButton:false
			})
			$('#main .section9 .lbt0').mCarousel({
				width:605,
				height:284,
				imgs:['img/lbt9_1.jpg','img/lbt9_2.jpg','img/lbt9_3.jpg'],
				type:'horizontal',
				showButton:false
			})
		}
		Lbt();
		
		function tab2(){
			$lis=$('#tabs2').children('ul').find('li');
			$tabs2_0=$('#tabs2').children('.tabs2-0');
			$lis.eq(0).addClass('li_active').find('a').addClass('a_active');
			$tabs2_0.eq(1).hide();
			$('#tabs2>ul').on('mouseenter','li',function(){
				$(this).addClass('li_active').find('a').addClass('a_active');
				$(this).siblings('li').removeClass('li_active').find('a').removeClass('a_active');
				idx=$(this).index();
				$tabs2_0.eq(idx).show().siblings('.tabs2-0').hide();
			})
		}
		tab2();


		/************asideR**************/
		$('#asideR').load('html/asideR.html',function(){
			AsideR();
		})

		/************footer**************/
		// 加载footerd内容
		$('#footer').load('html/footer.html',function(){})

	})
});