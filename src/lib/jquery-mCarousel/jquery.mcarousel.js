;(function($){
	$.fn.mCarousel = function(options){
		var defaults = {
			width:options.width,
			height:options.height,

			autoPlay:true,

			showSmall:false,

			showButton:true,

			showPage:true,

			duration:4000,

			// 轮播类型：fade:淡入淡出, vertial:垂直滚动, horizontal:水平滚动, show:幻灯片
			type:'vertical',

			index:0
		}

		this.each(function(){
			var $this = $(this);

			var opt = $.extend({},defaults,options);


			var carousel = {
				init:function(){
					
					var $ul = $('<ul/>');
					$ul.html(opt.imgs.map(function(item){
						return `<li><img src="${item}"/></li>`;
					}).join(''));

					$this.append($ul);

					$this.addClass('mcarousel');
					$ul.addClass(opt.type);
					if(opt.type === 'horizontal'){
						$ul.width(opt.width*opt.imgs.length);
					}else if(opt.type === 'fade'){
						$ul.css({
							width:opt.width,
							height:opt.height
						});
					}

					$this.css({
						width:opt.width,
						height:opt.height
					});

					if(opt.showPage){
						var $page = $('<div/>').addClass('page');

						var page_html = '<span></span>'.repeat(opt.imgs.length);
						$page.html(page_html);

						$page.appendTo($this);
					}else if(opt.showSmall){
						var $small = $('<div/>').addClass('small');
						var $cloneUl = $ul.clone().removeClass().attr('style','');
						$cloneUl.appendTo($small);

						$small.appendTo($this);

						$small.width(opt.imgs.length*40);
					}

					if(opt.showButton){
						var $btnPrev = $('<span/>').addClass('btn-prev').html('&lt;');
						var $btnNext = $('<span/>').addClass('btn-next').html('&gt;');

						$this.append([$btnNext,$btnPrev]);
					}

					if(opt.autoPlay){
						this.start();

						$this.on('mouseenter',()=>{
							this.stop();
						}).on('mouseleave',()=>{
							this.start();
						})
					}

					$this.on('click','.page span',function(){
						opt.index = $(this).index();
						carousel.move();
					})

					.on('click','.btn-prev',function(){
						opt.index--;
						carousel.move();
					}).on('click','.btn-next',function(){
						opt.index++;
						carousel.move();
					});

					this.move();
				},
				move:function(){
					if(opt.index>=opt.imgs.length){
						opt.index = 0;
					}else if(opt.index<0){
						opt.index = opt.imgs.length-1;
					}

					var $ul = $this.find('ul');

					var params = {};

					if(opt.type === 'vertical'){
						params.top = -opt.index*opt.height;
						$ul.animate(params);
					}else if(opt.type === 'horizontal'){
						params.left = -opt.index*opt.width;
						$ul.animate(params);
					}

					else if(opt.type === 'fade'){
						$ul.children().eq(opt.index).animate({opacity:1}).siblings('li').animate({opacity:0});
					}

					if(opt.showPage){
						$this.find('.page').children().eq(opt.index).addClass('active').siblings('span').removeClass();
					}
				},
				stop:function(){
					clearInterval(opt.timer);
				},
				start:function(){
					opt.timer = setInterval(function(){
						opt.index++;
						this.move();
					}.bind(this),opt.duration);
				}
			}

			carousel.init();
		});
		
		return this;
	}
})(jQuery);

