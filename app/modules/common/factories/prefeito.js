(function() {

	const _prefeitoFactory = () => {

		const _convertFromResponse = (list) => {
			return list.map((candidato) => {
				return {
					'id': candidato.id,
					'nomeCompleto': candidato.nomeCompleto,
					'nomeUrna': candidato.nomeUrna,
					'numero': candidato.numero,
					'partido': candidato.partido.sigla,
					'foto': candidato.id ? 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/foto/2/'+candidato.id : undefined
				}
			})
		};

		return {
			'convertFromResponse': _convertFromResponse
		}
	}

	angular.module('sp-eleicoes').factory('PrefeitoFactory', _prefeitoFactory);

})();