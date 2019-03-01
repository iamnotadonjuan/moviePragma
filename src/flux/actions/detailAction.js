import { INIT_FAVORITE, SAVE_RATING } from '../actionTypes'

const initFavorite = (data) => {
  return async dispatch => {
    const favorite = [{
      star_1: false,
      star_2: false,
      star_3: false,
      star_4: false,
      star_5: false
    }
    ]
    dispatch(_initFavorite(favorite))
  }
}

const _initFavorite = (data) => {
  return {
    type: INIT_FAVORITE,
    payload: { data }
  }
}

const saveRating = (data) => {
  return async dispatch => {

    if (data.count > 1) {
      let i;
      for (i = 1; i <= data.count; i++) {
        if (data.value == true && data.count < 5) {
          for (i = data.count; i <= 5; i++) {
            dataCopy = {
              position: 'star_' + i,
              value: data.value
            }
            dispatch(_saveRating(dataCopy))
          }
        } 

        dataCopy = {
          position: 'star_' + i,
          value: data.value
        }
        dispatch(_saveRating(dataCopy))
      }
    }
    else {
      if (data.value == true) {
        _initStar(dispatch, data)
      } else {
        dispatch(_saveRating(data))
      }
    }
  }
}

const _saveRating = (data) => {
  return {
    type: SAVE_RATING,
    payload: { data }
  }
}

const _initStar = (dispatch,data) => {
  for (i = data.count; i <= 5; i++) {
    dataCopy = {
      position: 'star_' + i,
      value: data.value
    }
    dispatch(_saveRating(dataCopy))
  }
}


export { initFavorite, saveRating }