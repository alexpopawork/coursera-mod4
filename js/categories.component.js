(function(){
	
	angular.module("MenuApp")
	.component("categories", {
		templateUrl: "templates/categories.template.html",
		binding: {
			categoriesData: "<"
		}
	});
	
})();