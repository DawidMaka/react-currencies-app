import React from 'react'
import PropTypes from 'prop-types'

const ListGroupItem = React.memo(({ children }) => (
  <li className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-center">
    {children}
  </li>
))
ListGroupItem.displayName = 'ListGroupItem'

ListGroupItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default ListGroupItem
