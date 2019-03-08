import axios from 'axios'
const BASE_API = 'https://yts.am/api/v2/'

class API {
    async get(limit, quality, url) {
        const query = await axios(`${BASE_API}${url}${limit}`)
        const { data } = await query.data
        return data
    }
}

export default new API()