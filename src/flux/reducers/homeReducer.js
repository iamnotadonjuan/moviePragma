import { MOVIE_LIST } from "../actionTypes";

const initialState = {
    list:[]
}
export default (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_LIST:
        return {
            ...state,
            list : action.payload.data.movies
          }

        default:
            return state
    }
}