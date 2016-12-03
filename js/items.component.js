(function(){
	
	angular.module("MenuApp")
	.component("items", {
		templateUrl: "items.html",
		controller: ItemsController,
		binding: {
			items: "<"
		}
	});
	
})();