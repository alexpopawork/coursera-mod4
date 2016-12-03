(function(){
	
	angular.module("MenuApp")
	.config(RoutesConfig);
	
	RoutesConfig.$inject("$stateProvider", "$urlRouterProvider");
	function RoutesConfig($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise("/");
		
		$stateProvider
		
		//Home state
		.state("home", {
			url: "/",
			templateUrl: "templates/home.html"
		})
		
		//Categories state
		.state("categories", {
			url: "/categories",
			templateUrl: "templates/categories.html",
			controller: "CategoriesController as categories"
		});
	}
	
})();