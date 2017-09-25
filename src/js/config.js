require.config({
	paths:{
		jquery:'../lib/jquery-3.2.1',
		mcarousel:'../lib/jquery-mCarousel/jquery.mcarousel',
		jqueryui:'../lib/jquery-ui-1.12.1/jquery-ui'
	},
	shim:{
		same:['common'],
		mcarousel:['jquery'],
		jqueryui:['jquery']
	}

});