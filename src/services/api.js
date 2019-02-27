const BASE_API = 'https://yts.am/api/v2/'

class API {
    async get(limit, quality, url) {
        console.log(limit)
        const query = await fetch(`${BASE_API}${url}${limit}`)
        const { data } = await query.json()
        return data
    }
}

export default new API()