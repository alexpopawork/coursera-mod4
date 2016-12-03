(function(){
	
	angular.module("MenuApp")
	.component("categories", {
		templateUrl: "templates/categories.template.html",
		controller: CategoriesController1,
		controllerAs: "ctrl",
		binding: {
			categoriesData: "<"
		}
	});
	
	function CategoriesController1(){};
	
})();