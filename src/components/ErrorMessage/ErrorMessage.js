import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = React.memo(({ className, children }) => (
  <p className={className}>{children}</p>
))
ErrorMessage.displayName = 'ErrorMessage'

export default ErrorMessage

ErrorMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
}

ErrorMessage.defaultProps = {
  className: 'text-danger',
}
