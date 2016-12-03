(function(){
	
	angular.module("MenuApp")
	.component("categories", {
		templateUrl: "templates/categories.template.html",
		controller: CategoriesController1,
		binding: {
			categoriesData: "<"
		}
	});
	
	function CategoriesController1(){};
	
})();