(function(){
	
	angular.module("MenuApp")
	.component("categories", {
		templateUrl: "categories.html",
		controller: CategoriesController,
		binding: {
			categories: "<"
		}
	});
	
})();