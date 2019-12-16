import axios from 'axios'
import { TOKEN } from '../commons/consts'

const BASE_URL = process.env.REACT_APP_API_URL

const baseApi = () => {
    const token = localStorage.getItem(TOKEN) || null

    const api = axios.create({
        mode: 'cors',
        baseURL: BASE_URL
    })

    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    return api
}

const Api = {
    request (path, options) {
        const base = baseApi()
        console.log(options)
        console.log(path)
        return base(path, options) // .then(resp => resp.data);
    }
}

export default Api
