import Api from '../util/api/baseApi'

const SituacoesLeitosService = {
    getAll () {
        return new Promise((resolve, reject) => {
            Api.request('/app/situacao_leito')
                .then((response) => {
                    const { data } = response
                    resolve(data)
                })
                .catch((error) => reject(error))
        })
    }
}

export default SituacoesLeitosService
