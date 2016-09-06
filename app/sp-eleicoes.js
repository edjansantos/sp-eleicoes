(function() {
	angular.module('sp-eleicoes', ['ui.router']).config(($stateProvider,$locationProvider) => {
		
		$stateProvider.state("app", {
            "url": "",
            "abstract": true,
            "templateUrl": "modules/common/views/main.html"
        }).state("app.home", {
            "url": "/",
            "templateUrl": "modules/common/views/home.html"
        });

        $locationProvider.html5Mode(true);
	});
})();