(function() {
	angular.module('sp-eleicoes', ['ui.router']).config(($stateProvider,$locationProvider) => {
		
		$stateProvider.state("app", {
            "url": "",
            "abstract": true,
            "templateUrl": "modules/common/views/main.html"
        }).state("app.home", {
            "url": "/",
            "templateUrl": "modules/common/views/home.html"
        }).state("app.vereadores", {
            "url": "/vereadores",
            "templateUrl": "modules/common/views/vereadores.html"
        }).state("app.prefeito", {
            "url": "/prefeito",
            "templateUrl": "modules/common/views/prefeito.html"
        });

        $locationProvider.html5Mode(true);
	});
})();