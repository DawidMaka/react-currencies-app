import 'bootstrap/bootstrap.scss'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Heading from 'components/Heading/Heading'
import Nav from 'components/Nav/Nav'

const MainTemplate = ({ children, location: { pathname } }) => (
  <>
    <header>
      <Heading
        tag={pathname === '/' ? 'h1' : 'span'}
        className="sr-only"
      >
        Currency application
      </Heading>
      <Nav />
    </header>
    <main className="container text-center">{children}</main>
  </>
)
MainTemplate.displayName = 'MainTemplate'

export default withRouter(MainTemplate)

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}
