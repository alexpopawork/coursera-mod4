(function(){
	
	angular.module("MenuApp")
	.controller("ItemsController", ItemsController);	
	
	ItemsController.$inject = ["MenuDataService", "items"];
	function ItemsController(MenuDataService, items){
		this.items = items;
	};
	
})();