import React from 'react'
import PropTypes from 'prop-types'

const Button = React.memo(({
  currency, type, handleOnClickFn, ...props
}) => {
  const handleOnClick = currency ? () => handleOnClickFn(currency) : () => handleOnClickFn()

  return (
    <button
    /* eslint-disable react/button-has-type */
      type={type}
      onClick={handleOnClick}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export default Button

Button.propTypes = {
  currency: PropTypes.shape({
    ask: PropTypes.number,
    bid: PropTypes.number,
    code: PropTypes.string,
    currency: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  type: PropTypes.string,
  handleOnClickFn: PropTypes.func.isRequired,
}

Button.defaultProps = {
  type: 'button',
  currency: {},
}
