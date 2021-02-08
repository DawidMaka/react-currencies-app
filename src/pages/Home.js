import {
  fetchCurrencies as fetchCurrenciesAction,
  addDisable as addDisableAction,
} from 'actions'
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import CurrenciesList from 'components/CurrenciesList'
import Spinner from 'components/Spinner'

const Home = () => {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.status)
  const error = useSelector((state) => state.error)
  const currencies = useSelector((state) => state.currencies, shallowEqual)

  useEffect(() => {
    if (!currencies.length) {
      dispatch(fetchCurrenciesAction())
    }
  }, [])

  const handleAddClick = useCallback((currency) => {
    dispatch(addDisableAction(currency))
  }, [])

  return (
    <>
      {status === 'error' ? <p className="text-danger">{error}</p> : null}
      {status === 'fetching' ? <Spinner /> : null}
      {status === 'fetched' ? (
        <CurrenciesList
          currencies={currencies}
          buttonText="Add to Favourites"
          handleClick={handleAddClick}
        />
      ) : null}
    </>
  )
}

export default Home
