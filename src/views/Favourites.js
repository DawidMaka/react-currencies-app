import { useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  removeFavourite as removeFavouriteAction,
  removeDisable as removeDisableAction,
  removeAllFavourites as removeAllFavouritesAction,
  removeAllDisable as removeAllDisableAction,
} from 'actions'
import { createSelector } from 'reselect'
import CurrenciesList from 'components/CurrenciesList/CurrenciesList'
import Heading from 'components/Heading/Heading'
import Button from 'components/Button/Button'

const getDisabledFavourites = createSelector(
  (state) => state.currencies,
  (favourites) => favourites.filter((favourite) => favourite.disabled),
)

const Favourites = () => {
  const favourites = useSelector(getDisabledFavourites, shallowEqual)
  const dispatch = useDispatch()

  const handleRemoveAllClick = useCallback(() => {
    dispatch(removeAllFavouritesAction())
    dispatch(removeAllDisableAction())
  }, [])

  const handleRemoveClick = useCallback((currency) => {
    if (window.confirm('Are you sure?')) {
      dispatch(removeFavouriteAction(currency))
      dispatch(removeDisableAction(currency))
    }
  }, [])

  return (
    <>
      <Heading
        tag="h2"
        className="d-inline-block align-sub mb-0"
      >
        Favourites
      </Heading>
      <Button
        className="btn btn-danger btn-sm ml-3"
        handleOnClickFn={handleRemoveAllClick}
        disabled={false}
      >
        Remove All
      </Button>
      {favourites.length ? (
        <CurrenciesList
          currencies={favourites}
          buttonText="Remove"
          handleOnClickFn={handleRemoveClick}
          disabled={false}
        />
      ) : (
        <p className="mt-4">You have not added any favourites currencies yet.</p>
      )}
    </>
  )
}
Favourites.displayName = 'Favourites'

export default Favourites
