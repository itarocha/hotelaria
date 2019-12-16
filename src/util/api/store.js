import { TOKEN } from '../commons/consts'

const isAuthenticated = () => localStorage.getItem(TOKEN) !== null

const getToken = () => localStorage.getItem(TOKEN)

const saveToken = (token) => {
    localStorage.setItem(TOKEN, token)
}

const clearToken = () => {
    localStorage.removeItem(TOKEN)
}

const parseJwt = () => {
    const token = getToken()
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
}

export {
    isAuthenticated,
    getToken,
    saveToken,
    clearToken,
    parseJwt
}
