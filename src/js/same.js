function Header(){
	// 根据ip获取省份
	$.get('../api/get_outer_ip.php',function(ip){
		$.get('../api/get_city.php',{ip:ip},function(province){
			$('#located').html(province);
		},'text')
	},'text')
	// 获取json数据，加载所有省份
	$.getJSON('../api/data/region.json',function(data){
		// var indexCity={A:[],B:[]};
		var indexCity={};
		var keys=[];
		$(data.regions).each(function(idx,item){
			// console.log(item)
			var firstLetter=item.pinyin.slice(0,1);
			if(indexCity[firstLetter]===undefined){
				indexCity[firstLetter]=[item.name];
				keys.push(firstLetter);
			}else{
				indexCity[firstLetter].push(item.name);
			}
		})
		// 对indexCity对象按属性名排序
		keys=keys.sort();
		var newIndexCity={};
		for(var i=0;i<keys.length;i++){
			var k=keys[i];
			newIndexCity[k]=indexCity[k];
		}
		var $ul=$('<ul/>')
		// 遍历newIndexCity对象
		for(var attr in newIndexCity){
			// 遍历数组生成html结构
			var $li=$('<li><span>'+attr+'</span></li>')
			$li[0].innerHTML+=newIndexCity[attr].map(function(item){
				return `<a href="#">${item}</a>`
			}).join('');
			$ul.append($li[0]);
		}
		$('#header .province').append($ul);
	})

	var $h_top_left=$('#header .h_top .left');
	$h_top_left.on('mouseenter',function(){
		$(this).find('p i').css('background-position','-163px -25px');
		$(this).find('.province').css('display','block');
	})
	$h_top_left.on('mouseleave',function(){
		$(this).find('p i').css('background-position','-163px 0');
		$(this).find('.province').css('display','none');
	})
	$h_top_left.find('.province').on('click','a',function(){
		$('#located').html(this.innerText);
	})

	var $h_top_right=$('#header .h_top .right');
	$h_top_right.find('.third').on('mouseenter',function(){
		$(this).find('a i').css('background-position','-163px -25px');
	})
	$h_top_right.find('.third').on('mouseleave',function(){
		$(this).find('a i').css('background-position','-163px 0');
	})

	var $nav_right_one=$('#nav .nav_right .one');
	$nav_right_one.children().last().on('mouseenter',function(){
		$(this).find('a i').css('background-position','-163px -25px');
		$(this).find('.two').css('display','block');
	})
	$nav_right_one.children().last().on('mouseleave',function(){
		$(this).find('a i').css('background-position','-163px 0');
		$(this).find('.two').css('display','none');
	})
}
