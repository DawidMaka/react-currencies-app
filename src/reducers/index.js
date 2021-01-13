import {
  FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
  ADD_DISABLE_SUCCESS,
  REMOVE_DISABLE_SUCCESS,
  REMOVE_ALL_DISABLE_SUCCESS,
  ADD_FAVOURITE_SUCCESS,
  REMOVE_FAVOURITE_SUCCESS,
  REMOVE_ALL_FAVOURITES_SUCCESS,
} from 'actions'

const initialState = {
  currencies: [],
  favourites: [],
  error: null,
  status: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_REQUEST:
      return {
        ...state,
        status: 'fetching',
      }
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        status: 'fetched',
        currencies: action.payload.data.map((item) => ({ ...item, disabled: false })),
      }
    case FETCH_CURRENCIES_FAILURE:
      return {
        ...state,
        status: 'error',
        error: action.payload,
      }
    case ADD_FAVOURITE_SUCCESS:
      return {
        ...state,
        favourites: [...state.favourites, action.payload.item],
      }
    case ADD_DISABLE_SUCCESS:
      return {
        ...state,
        currencies: state.currencies.map((item) => (
          item.code === action.payload.item.code ? { ...item, disabled: true } : item)),
      }
    case REMOVE_DISABLE_SUCCESS:
      return {
        ...state,
        currencies: state.currencies.map((item) => (
          item.code === action.payload.item.code ? { ...item, disabled: false } : item)),
      }
    case REMOVE_ALL_DISABLE_SUCCESS:
      return {
        ...state,
        currencies: state.currencies.map((item) => ({ ...item, disabled: false })),
      }
    case REMOVE_FAVOURITE_SUCCESS:
      return {
        ...state,
        favourites: state.favourites.filter((item) => item.code !== action.payload.item.code),
      }
    case REMOVE_ALL_FAVOURITES_SUCCESS:
      return {
        ...state,
        favourites: [],
      }
    default:
      return state
  }
}

export default rootReducer
