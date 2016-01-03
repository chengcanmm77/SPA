requirejs.config({
	//By default load any module IDs from /assets
	baseUrl: './assets',
	paths: {
		'app': 'scripts/app',
		'mod': 'scripts/mod',
		'jquery': '../node_modules/jquery/dist/jquery.min'
	}
});

requirejs(['jquery','mod/route','mod/rootScope'],function($,route,rootScope){
	$(function(){
		var defaultUrl = rootScope.filePath + '/page/1.html';
		route(defaultUrl);
	});
});