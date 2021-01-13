import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  fetchCurrencies as fetchCurrenciesAction,
  addFavourite as addFavouriteAction,
  addDisable as addDisableAction,
} from 'actions'
import CurrenciesList from 'components/CurrenciesList/CurrenciesList'
import Heading from 'components/Heading/Heading'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import Spinner from 'components/Spinner/Spinner'

const Home = () => {
  const status = useSelector((state) => state.status)
  const error = useSelector((state) => state.error)
  const currencies = useSelector((state) => state.currencies, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!currencies.length) {
      dispatch(fetchCurrenciesAction())
    }
  }, [])

  const handleAddClick = useCallback((currency) => {
    dispatch(addFavouriteAction(currency))
    dispatch(addDisableAction(currency))
  }, [])

  return (
    <>
      <Heading tag="h2">Currencies</Heading>
      {status === 'error' && <ErrorMessage>{error}</ErrorMessage>}
      {status === 'fetching' && <Spinner />}
      {status === 'fetched' && (
        <CurrenciesList
          currencies={currencies}
          buttonText="Add to Favourites"
          handleOnClickFn={handleAddClick}
        />
      )}
    </>
  )
}
Home.displayName = 'Home'

export default Home
