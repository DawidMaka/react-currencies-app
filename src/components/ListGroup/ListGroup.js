import React from 'react'
import PropTypes from 'prop-types'

const ListGroup = React.memo(({ className, children }) => (
  <ul className={className}>
    {children}
  </ul>
))
ListGroup.displayName = 'ListGroup'

export default ListGroup

ListGroup.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      ask: PropTypes.number,
      bid: PropTypes.number,
      code: PropTypes.string,
      currency: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
}
