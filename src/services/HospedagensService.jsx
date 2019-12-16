import Api from '../util/api/baseApi'

const HospedagensService = {
    getAll (data) {
        return new Promise((resolve, reject) => {
            const dados = {
                data: data
            }

            Api.request('/app/hospedagem/mapa', { method: 'POST', data: dados })
                .then((response) => {
                    const { data } = response
                    resolve(data)
                })
                .catch((error) => reject(error))
        })
    }
}

export default HospedagensService
