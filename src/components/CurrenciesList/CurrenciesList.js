import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button/Button'
import ListGroup from 'components/ListGroup/ListGroup'
import ListGroupItem from 'components/ListGroup/ListGroupItem/ListGroupItem'
import Currency from 'components/Currency/Currency'

const CurrenciesList = React.memo(({ currencies, buttonText, handleOnClickFn }) => (
  <>
    <ListGroup className="list-group mt-4">
      {currencies.map((currency) => (
        <ListGroupItem key={currency.code}>
          <Currency currency={currency} />
          <Button
            className={`btn btn-${buttonText === 'Remove' ? 'danger' : 'success'} btn-sm`}
            disabled={buttonText === 'Remove' ? false : currency.disabled}
            currency={currency}
            handleOnClickFn={handleOnClickFn}
          >
            {buttonText}
          </Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  </>
))
CurrenciesList.displayName = 'CurrenciesList'

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
  handleOnClickFn: PropTypes.func.isRequired,
}
