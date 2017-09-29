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
		// 显示验证码
		function Showcode(){
			$('#showCode').html(com.yanzhengma());
			$('#showCode').click(function(){
				$('#showCode').html(com.yanzhengma());
				$('#vCode').val('');
				$('#vCode').focus();
				$('#main .vCode_true').hide();
			})
			$('#changeCode').click(function(){
				$('#showCode').html(com.yanzhengma());
				$('#vCode').val('');
				$('#vCode').focus();
				$('#main .vCode_true').hide();
			})
		}
		Showcode();
		// // 确定验证码验证是否已经成功
		var isVcode=false;
		// 验证码验证
		var $vCode=$('#vCode');
		function vvCode(){
			var _showCode=$('#showCode').html().toLowerCase();
			var _vCode=$vCode.val().trim().toLowerCase();
			if(_vCode===''){
				$('#main .vCode_tip').html('请输入验证码');
				$('#main .vCode_true').hide();
				$('#main .vCode_false').show();
				isVcode=false;
			}else{
				if(_vCode !== _showCode){
					$('#main .vCode_tip').html('验证码错误');
					$('#main .vCode_true').hide();
					$('#main .vCode_false').show();
					isVcode=false;
				}else{
					$('#main .vCode_tip').html('');
					$('#main .vCode_true').show();
					$('#main .vCode_false').hide();
					isVcode=true;
				}
			}
		}
		$vCode.blur(vvCode);
		// 提交操作
		$('#submit').hover(function(){
			$('#submit').css('opacity',0.7);
		},function(){
			$('#submit').css('opacity',1);
		})
		$('#submit').click(function(){
			// 是否免登录
			var isAuto=$('#autoLogin').prop('checked');

			if(isVcode){
				var username=$('#username').val();
				var password=$('#pass').val();
				$.get('../api/login.php',{username:username,password:password},function(data){
					if(data==="fail"){
						$('#main .pass_tip').show();
						$('#showCode').html(com.yanzhengma());
						$('#vCode').val('');
						$('#main .vCode_true').hide();
					}else{
						$('#main .pass_tip').hide();
						if(isAuto){
							var date=new Date();
							date.setDate(date.getDate()+14);
							com.Cookie.set('username',username,{expires:date.toUTCString(),path:"/"});
						}
						location.href="../index.html?username=" + username;
					}
				},'text')
			}
		})
	})
})