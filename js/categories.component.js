(function(){
	
	angular.module("MenuApp")
	.component("categories", {
		templateUrl: "templates/categories.template.html",
		controller: CategoriesController1,
		controllerAs: "ctrl",
		bindings: {
			categoriesData: "<"
		}
	});
	
	function CategoriesController1(){
		var vm = this;
	};
	
})();