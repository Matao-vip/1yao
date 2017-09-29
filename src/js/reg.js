require(['config'],function(){
	require(['jquery','common'],function($,com){
		// 加载footer内容
		$('#footer').load('footer.html .final',function(){
			$('#footer .final').children('p').eq(0).css('margin-bottom','10px');
		});

		// form表单验证
		function Form(){
			// 确定所有验证是否已经成功
			var isTel=false;
			var isPass=false;
			var isrePass=false;
			var isVcode=false;
			// 账号（手机号）验证
			function Tel(){
				var $username=$('#username');
				// 正则验证
				$username.blur(function(){
					var username=$username.val().trim()
					if(username===''){
						$('#main .tel_tip').html('用户名不能为空！');
						$('#main .tel_empty').show();
						$('#main .tel_true').hide();
						isTel=false;
					}else{
						if(!/^1[34578]\d{9}$/.test(username)){
							$('#main .tel_tip').html('手机号格式不正确');
							$('#main .tel_empty').hide();
							$('#main .tel_true').hide();
							isTel=false;
						}else{
							// 已注册验证
							$.get('../api/reg.php',{username:username},function(data){
								if(data==="fail"){
									$('#main .tel_tip').html('该用户已注册，请直接登录！');
									$('#main .tel_empty').hide();
									$('#main .tel_true').hide();
									isTel=false;
								}else{
									$('#main .tel_tip').html('');
									$('#main .tel_empty').hide();
									$('#main .tel_true').show();
									isTel=true;
								}
							},'text')
						}
					}
				})
			}
			Tel();
			// 密码验证
			function Pass(){
				var $pass=$('#pass');
				var $safe=$('#main .safe');
				var $span=$safe.children('span');
				// 正则验证
				$pass.blur(function(){
					// 非空验证
					if($pass.val().trim()===""){
						$('#main').find('.pass_tip').show().html('密码不能为空');
						$('#main').find('.pass_exp').hide();
						$('#main').find('.pass_true').hide();
						isPass=false;
					}else{
						// 长度验证
						if(!/^[\w\-\*\&\%\$\#\@\!\?\.\^]{6,20}$/.test($pass.val())){
							$('#main').find('.pass_tip').show().html('密码只能为6-20个字符');
							$('#main').find('.pass_exp').hide();
							$('#main').find('.pass_true').hide();
							$safe.hide();
							isPass=false;
						}else{
							$('#main').find('.pass_tip').hide().html('');
							$('#main').find('.pass_exp').hide();
							$('#main').find('.pass_true').show();
							isPass=true;
						}
					}
					// 安全程度验证
				})
				$pass.keyup(function(){
					var _pass=$pass.val().trim().toUpperCase();
			 		var hasNumber = false;
		        	var hasLetter = false;
		        	var hasSign = false;
					if(_pass===""){
						$('#main').find('.pass_tip').show().html('密码不能为空格');
						$('#main').find('.pass_exp').hide();
						$('#main').find('.pass_true').hide();
						$safe.hide();
					}else{
						$('#main').find('.pass_tip').hide()
						$('#main').find('.pass_exp').hide();
						$('#main').find('.pass_true').hide();
						$safe.show();
						for(var i=0;i<_pass.length;i++){
							if(!isNaN(_pass[i])){
								hasNumber=true;
							}else{
								if(_pass.charCodeAt(i)>=65 && _pass.charCodeAt(i)<=90){
									hasLetter=true;
								}else{
									hasSign=true;
								}
							}
						}
						if(hasSign && (hasLetter || hasNumber)){
							$span.eq(0).css('backgroundColor','#f00');
							$span.eq(1).css('backgroundColor','#f90');
							$span.eq(2).css('backgroundColor','#0c0');
						}else if(hasLetter && hasNumber){
							$span.eq(0).css('backgroundColor','#f00');
							$span.eq(1).css('backgroundColor','#f60');
							$span.eq(2).css('backgroundColor','#ccc');
						}else if(hasSign || hasLetter || hasNumber){
							$span.eq(0).css('backgroundColor','#f00');
							$span.eq(1).css('backgroundColor','#ccc');
							$span.eq(2).css('backgroundColor','#ccc');
						}else{
							$span.eq(0).css('backgroundColor','#ccc');
							$span.eq(1).css('backgroundColor','#ccc');
							$span.eq(2).css('backgroundColor','#ccc');
						}
					}
				})
			}
			Pass();
			// 确认密码验证
			function rePass(){
				var $repass=$('#repass');
				$repass.blur(function(){
					var _pass=$('#pass').val().trim();
					var _repass=$repass.val().trim();
					if(_repass===''){
						$('#main .repass_tip').html('确认密码不能为空');
						$('#main .repass_true').hide();
						isrePass=false;
					}else{
						if(_repass !== _pass){
							$('#main .repass_tip').html('两次密码输入不一致');
							$('#main .repass_true').hide();
							isrePass=false;
						}else{
							$('#main .repass_tip').html('');
							$('#main .repass_true').show();
							isrePass=true;
						}
					}
				})
			} 
			rePass();
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
					return false;
				})
			}
			Showcode();
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
				// 是否同意协议
				var isAgree=$('#agree').prop('checked');
				var isreg=true;
				if(isTel && isPass && isrePass && isVcode && isAgree && isreg){
					var username=$('#username').val();
					var password=$('#pass').val();
					$.get('../api/reg.php',{username:username,password:password,isreg:isreg},function(data){
						if(data==="ok"){
							$popup.show();
							let win_w=window.innerWidth;
							let win_h=window.innerHeight;
							let box_w=$popup.outerWidth();
							let box_h=$popup.outerHeight();
							console.log(win_w,box_w);
							$popup.css({top:(win_h-box_h)/2,left:(win_w-box_w)/2});
						}
					},'text')
				}else{
					console.log(isTel,isPass,isrePass,isVcode,isAgree,isreg);
					return;
				}
			})
		}
		Form();
		// 注册成功弹窗处理
		var $popup=$('#popup');
		var $span=$popup.find('span')
		$span.hover(function(){
			$span.addClass('hover');
		},function(){
			$span.removeClass('hover');
		})
		$span.click(function(){
			$popup.hide();
			location.reload();
		})
	})
})