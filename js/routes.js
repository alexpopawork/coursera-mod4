(function(){
	
	var mod = angular.module("MenuApp");
	mod.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");
		
		$stateProvider
		
		//Home state
		.state("home", {
			url: "/",
			templateUrl: "templates/home.template.html"
		})
		
		//Categories state
		.state("categories", {
			url: "/categories",
			templateUrl: "templates/categories.template.html",
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories().then(function(result){
						console.log(result);
					});
				}]
			}
		});
	});
	
})();