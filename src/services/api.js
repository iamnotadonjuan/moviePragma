import axios from 'axios'
import Config from 'react-native-config'

class API {
  async get(limit, quality, url) {
    const query = await axios(`${Config.API_URL}${url}${limit}`)
    const { data } = await query.data
    return data
  }
}

export default new API()