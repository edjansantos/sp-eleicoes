const _prefeitoController = function(PrefeitoService, PrefeitoFactory) {

	const vm = this;

	const _getCandidatosSuccess = (res) => {
		console.log(res.data.candidatos);
		vm.candidatosList = PrefeitoFactory.convertFromResponse(res.data.candidatos);
	};

	const _getCandidatosError = (err) => {
		//-- TODO: Error handling
	};


	const _getCandidatos = () => {
		const _service = PrefeitoService.getCandidatos();

		_service.then(_getCandidatosSuccess, _getCandidatosError);
	};

	const _init = () => {
		_getCandidatos();
	};

	_init();
}

angular.module('sp-eleicoes').controller('PrefeitoController', _prefeitoController);
