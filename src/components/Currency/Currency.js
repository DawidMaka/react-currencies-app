import React from 'react'
import PropTypes from 'prop-types'

const Currency = React.memo(({ currency: { code, bid, ask } }) => (
  <div>
    {code}
    <span className="badge border border-success text-success align-middle ml-1">
      bid:
      {' '}
      {bid}
    </span>
    <span className="badge border border-danger text-danger align-middle ml-1">
      ask:
      {' '}
      {ask}
    </span>
  </div>
))
Currency.displayName = 'Currency'

export default Currency

Currency.propTypes = {
  currency: PropTypes.shape({
    ask: PropTypes.number,
    bid: PropTypes.number,
    code: PropTypes.string,
  }).isRequired,
}
