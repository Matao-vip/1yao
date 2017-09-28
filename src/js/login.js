require(['config'],function(){
	require(['jquery','common'],function($,com){
		// 加载footer内容
		$('#footer').load('footer.html .final',function(){
			$('#footer .final').children('p').eq(0).css('margin-bottom','10px');
		});
		// tab切换

		function Tab(){
			$tab=$('#main .right .tab');
			$li=$tab.find('li');
			$content=$('#main .right .form');
			$li.eq(0).addClass('active').find('a').css('color','#67C0FF');
			$li.click(function(){
				$(this).addClass('active').find('a').css('color','#67C0FF');
				$(this).siblings('li').removeClass('active').find('a').css('color','#5E5E5E');
				var idx=$(this).index();
				$content.eq(idx).show().siblings('.form').hide();
			})

		}
		Tab();
	})
})