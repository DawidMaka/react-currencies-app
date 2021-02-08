import PropTypes from 'prop-types'
import React from 'react'

const CurrenciesList = React.memo(({ currencies, buttonText, handleClick }) => (
  <ul className="list-group mt-4">
    {currencies.map((currency) => (
      <li
        key={currency.code}
        className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-center"
      >
        <p className="m-0">
          {currency.code}
          <span className="badge border border-success text-success align-middle ml-1">
            bid:
            {' '}
            {currency.bid}
          </span>
          <span className="badge border border-danger text-danger align-middle ml-1">
            ask:
            {' '}
            {currency.ask}
          </span>
        </p>
        <button
          className={`btn btn-sm btn-${buttonText === 'Remove' ? 'danger' : 'success'} mt-2 mt-sm-0`}
          disabled={buttonText === 'Remove' ? false : currency.disabled}
          onClick={() => handleClick(currency)}
          type="button"
        >
          {buttonText}
        </button>
      </li>
    ))}
  </ul>
))

export default CurrenciesList

CurrenciesList.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      ask: PropTypes.number,
      bid: PropTypes.number,
      code: PropTypes.string,
      currency: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}
