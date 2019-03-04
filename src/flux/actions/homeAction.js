import { MOVIE_LIST } from '../actionTypes'
import API from '../../services/api'

const listMovie =  (data) => {
  return async dispatch => {
    const List = await API.get(data.limit, '3D', data.url)
    dispatch(_listMovie(List))
  }
}

const _listMovie = (data) => {
  return {
    type: MOVIE_LIST,
    payload: { data }
  }
}


export { listMovie }