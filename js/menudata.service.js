

(function(){
	
	angular.module("data")
	.service("MenuDataService", MenuDataService);
	
	MenuDataService.$inject = ["$http"];
	function MenuDataService($http){
		var service = this;
		
		service.getAllCategories = function(){
			return $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/categories.json'
			}).then(function (result) {
				return '';
			});
		};
		
		service.getItemsForCategory = function(categoryShortName){
			return $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName
			}).then(function (result) {
				return '';
			});
		};
	};
	
	
	// FoundItems directive
	function FoundItems(){
		return {
			scope: {
				menu: "<",
				searchTerm: "<",
				onRemove: "&"
			},
			templateUrl: "menu.html",
			controller: FoundItemsController,
			controllerAs: "items",
			bindToController: true
		};
	};
	
	function FoundItemsController(){
		var items = this;
		items.getMessage = function(){
			if(items.menu === undefined){
				return '';
			}
			if(items.searchTerm.length != 0){
				if(items.menu == null || items.menu.length == 0){
					return 'Nothing found for '+items.searchTerm;
				}
				return "Items found containing "+items.searchTerm+": "+items.menu.length;
			} else {
				return "Nothing found";
			}
		}
	}
	
})();