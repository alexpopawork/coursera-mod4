(function(){
	
	angular.module("MenuApp")
	.component("categories", {
		templateUrl: "categories.template.html",
		binding: {
			categories: "<"
		}
	});
	
})();