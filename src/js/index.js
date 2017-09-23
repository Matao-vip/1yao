require(['config'],function(){
	require(['jquery','common'],function($,com){
		$('body').css('background-color',com.randomColor());
	})
});