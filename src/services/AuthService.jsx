import Api from '../util/api/baseApi'
import { saveToken, clearToken } from '../util/api/store'

const AuthService = {
    login (data) {
        return new Promise((resolve, reject) => {
            Api.request('/auth/login', { data, method: 'POST' })
                .then((response) => {
                    const { accessToken } = response.data
                    saveToken(accessToken)
                    resolve(response)
                })
                .catch((error) => reject(error))
        })
    },

    logout () {
        clearToken()
    },

    getSituacoesLeitos () {
        return Api.request('/app/situacao_leito')
    }
}

export default AuthService
