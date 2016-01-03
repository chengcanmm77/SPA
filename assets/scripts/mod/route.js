define([],function(){
	return function(url,fn){
		$('#main').load(url,function(){
			$(window).scrollTop(0);
			if(typeof fn === 'function'){
				fn();
			}
		});
	}
});