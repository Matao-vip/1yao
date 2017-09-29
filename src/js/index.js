require(['config'],function(){
	require(['jquery','common','same','mcarousel','jqueryui'],function($,com,same,mc,jui){
		// 判断是否存在两周内免登陆cookie
		var username=com.Cookie.get('username');
		// location.href="../index.html?username=" + username;
		// 判断是否有登录
		var params = location.search;
		params = decodeURI(params);
		if(username ===""){
			username=params.split('=')[1];
		}

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
			$('.h_top .reg').prop('href','html/reg.html');
			$('.h_top .login').prop('href','html/login.html');
			$('#nav .nav_left .second a').prop('href','html/goodslist.html');
			
			if(username !== undefined){
				$('#nav .nav_left .second a').prop('href','html/goodslist.html?username='+username);
				$('#header .unLogin').hide();
				$('#header .yetLogin').show().find('span').html(username + " 欢迎您！").next('a').prop('href','html/login.html');
			}
			$('#header .yetLogin').on('click','a',function(){
				com.Cookie.remove('username');
			})
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
		
		function tabs2(){
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
		tabs2();

		// 获取数据库首页商品数据
		$.get('../api/indexgoods.php',function(idxgoods){
			var $idxGoods=$('#main .section0 .right_bottom');
			for(var i=0;i<$idxGoods.length;i++){
				var $ul=$('<ul/>');
				var html=idxgoods.map(function(items,idx){
						if(idx>=5*i && idx<5*(i+1)){
							return `<li>
								<img src="${items.imgurl}"/>
								<a href="#">${items.describes}</a>
								<span>￥${(items.price)}</span>
							</li>`
						}
					}).join('');
				$ul.html(html);
				// console.log($ul);
				$idxGoods.eq(i).append($ul);
			}
		},'json')

		/************asideL**************/
		function AsideL(){
			// 窗口滚动事件
			var $lis=$('#asideL ul').children();
			window.onscroll=function(e){
				var sY=scrollY;
				if(sY>=900 && sY<=5700){
					$('#asideL').show();
				}else{
					$('#asideL').hide();
				}
				switch(true){
					case sY>=900 && sY<1400:
						$lis.eq(0).find('.first').hide();
						$lis.eq(0).find('.last').css('display','block');
						$lis.eq(0).siblings('li').find('.first').show();
						$lis.eq(0).siblings('li').find('.last').hide();
						break;
					case sY>=1400 && sY<2000:
						$lis.eq(1).find('.first').hide();
						$lis.eq(1).find('.last').css('display','block');
						$lis.eq(1).siblings('li').find('.first').show();
						$lis.eq(1).siblings('li').find('.last').hide();
						break;
					case sY>=2000 && sY<2500:
						$lis.eq(2).find('.first').hide();
						$lis.eq(2).find('.last').css('display','block');
						$lis.eq(2).siblings('li').find('.first').show();
						$lis.eq(2).siblings('li').find('.last').hide();
						break;
					case sY>=2500 && sY<3100:
						$lis.eq(3).find('.first').hide();
						$lis.eq(3).find('.last').css('display','block');
						$lis.eq(3).siblings('li').find('.first').show();
						$lis.eq(3).siblings('li').find('.last').hide();
						break;
					case sY>=3100 && sY<3600:
						$lis.eq(4).find('.first').hide();
						$lis.eq(4).find('.last').css('display','block');
						$lis.eq(4).siblings('li').find('.first').show();
						$lis.eq(4).siblings('li').find('.last').hide();
						break;
					case sY>=3600 && sY<4100:
						$lis.eq(5).find('.first').hide();
						$lis.eq(5).find('.last').css('display','block');
						$lis.eq(5).siblings('li').find('.first').show();
						$lis.eq(5).siblings('li').find('.last').hide();
						break;
					case sY>=4100 && sY<4600:
						$lis.eq(6).find('.first').hide();
						$lis.eq(6).find('.last').css('display','block');
						$lis.eq(6).siblings('li').find('.first').show();
						$lis.eq(6).siblings('li').find('.last').hide();
						break;
					case sY>=4600 && sY<5100:
						$lis.eq(7).find('.first').hide();
						$lis.eq(7).find('.last').css('display','block');
						$lis.eq(7).siblings('li').find('.first').show();
						$lis.eq(7).siblings('li').find('.last').hide();
						break;
					case sY>=5100 && sY<=5700:
						$lis.eq(8).find('.first').hide();
						$lis.eq(8).find('.last').css('display','block');
						$lis.eq(8).siblings('li').find('.first').show();
						$lis.eq(8).siblings('li').find('.last').hide();
						break;
					default:
						break;
				}
			}
		}
		AsideL();

		/************asideR**************/
		$('#asideR').load('html/asideR.html',function(){
			AsideR();
			$('#asideR .second a').prop('href','html/car.html');
		})

		/************footer**************/
		// 加载footerd内容
		$('#footer').load('html/footer.html')

	})
});