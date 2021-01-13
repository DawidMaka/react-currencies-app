import axios from 'axios'
import NBPQuery from 'api'

export const FETCH_CURRENCIES_REQUEST = 'FETCH_CURRENCIES_REQUEST'
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS'
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE'

export const ADD_DISABLE_SUCCESS = 'ADD_DISABLE_SUCCESS'
export const REMOVE_DISABLE_SUCCESS = 'REMOVE_DISABLE_SUCCESS'
export const REMOVE_ALL_DISABLE_SUCCESS = 'REMOVE_ALL_DISABLE_SUCCESS'

export const ADD_FAVOURITE_SUCCESS = 'ADD_FAVOURITE_SUCCESS'
export const REMOVE_FAVOURITE_SUCCESS = 'REMOVE_FAVOURITE_SUCCESS'
export const REMOVE_ALL_FAVOURITES_SUCCESS = 'REMOVE_ALL_FAVOURITES_SUCCESS'

export const fetchCurrencies = () => (dispatch) => {
  dispatch({ type: FETCH_CURRENCIES_REQUEST })

  return axios
    .get(NBPQuery)
    .then(({ data }) => {
      dispatch({
        type: FETCH_CURRENCIES_SUCCESS,
        payload: {
          data: data[0].rates,
        },
      })
    })
    .catch(() => {
      dispatch({
        type: FETCH_CURRENCIES_FAILURE,
        payload: 'Something went wrong, please refresh the site...',
      })
    })
}

export const addFavourite = (item) => ({
  type: ADD_FAVOURITE_SUCCESS,
  payload: {
    item,
  },
})

export const addDisable = (item) => ({
  type: ADD_DISABLE_SUCCESS,
  payload: {
    item,
  },
})

export const removeDisable = (item) => ({
  type: REMOVE_DISABLE_SUCCESS,
  payload: {
    item,
  },
})

export const removeAllDisable = () => ({
  type: REMOVE_ALL_DISABLE_SUCCESS,
})

export const removeFavourite = (item) => ({
  type: REMOVE_FAVOURITE_SUCCESS,
  payload: {
    item,
  },
})

export const removeAllFavourites = () => ({
  type: REMOVE_ALL_FAVOURITES_SUCCESS,
})
