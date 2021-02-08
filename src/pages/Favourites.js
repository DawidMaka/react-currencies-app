import { createSelector } from 'reselect'
import { removeDisable as removeDisableAction } from 'actions'
import { useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import CurrenciesList from 'components/CurrenciesList'

const getDisabledCurrencies = createSelector(
  (state) => state.currencies,
  (currencies) => currencies.filter((currency) => currency.disabled),
)

const Favourites = () => {
  const dispatch = useDispatch()
  const currencies = useSelector(getDisabledCurrencies, shallowEqual)

  const handleRemoveClick = useCallback((currency) => {
    if (window.confirm('Are you sure?')) {
      dispatch(removeDisableAction(currency))
    }
  }, [])

  return (
    <>
      {currencies.length ? (
        <CurrenciesList
          buttonText="Remove"
          currencies={currencies}
          handleClick={handleRemoveClick}
        />
      ) : (
        <p className="mt-4">You have not added any favourites currencies yet.</p>
      )}
    </>
  )
}

export default Favourites
