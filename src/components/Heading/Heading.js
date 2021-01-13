import React from 'react'
import PropTypes from 'prop-types'

const Heading = React.memo(({ tag: Tag, className, ...props }) => (
  <Tag
    className={className}
    {...props}
  />
))
Heading.displayName = 'Heading'

export default Heading

Heading.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
}

Heading.defaultProps = {
  tag: 'h1',
  className: undefined,
}
