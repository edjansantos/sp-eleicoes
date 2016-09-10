(function() {

	const _prefeitoService = function(mainConfig, $http) {

		const _getCandidatos = () => $http.get(mainConfig.apiEndpoint + 'candidatura/listar/2016/71072/2/11/candidatos');
		

		return {
			'getCandidatos': _getCandidatos
		}
	};


	angular.module('sp-eleicoes').service('PrefeitoService', _prefeitoService);
})();