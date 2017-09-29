require(['config'],function(){
	require(['jquery','common','same','jqueryui'],function($,com,same,jui){
		// 判断是否存在两周内免登陆cookie
		var username=com.Cookie.get('username');
		
		// location.href="../index.html?username=" + username;
		// 判断是否有登录
		var params = location.search;
		params = decodeURI(params);
		if(username ===""){
			username=params.split('=')[1];
		}
		console.log(username);
		// 加载header的内容
		$('#header').load('header.html',function(){
			Header();
			$('.h_banner').hide();
			
			if(username !== undefined){
				$('#header .unLogin').hide();
				$('#header .yetLogin').show().find('span').html(username + " 欢迎您！");
			}
			$('#header .yetLogin').on('click','a',function(){
				var date=new Date();
				date.setDate(date.getDate()-10);
				com.Cookie.set('username',"#",{expires:date.toUTCString(),path:"/"});

			})
			$('#nav .nav_left').hover(function(){
				$(this).find('ul').show();
			},function(){
				$(this).find('ul').hide();
			})
		})
	
		/************asideL**************/
		// 手风琴菜单
		$( "#accordion" ).accordion({
	    	collapsible: true
	    });

		/************asideR**************/
		$('#asideR').load('asideR.html',function(){
			AsideR();
		})

		/************footer**************/
		// 加载footerd内容
		$('#footer').load('footer.html')
	})
})