import PropTypes from 'prop-types'
import { removeAllDisable as removeAllDisableAction } from 'actions'
import { withRouter } from 'react-router'
import { useDispatch } from 'react-redux'
import Nav from 'components/Nav'

const MainTemplate = ({ children, location: { pathname } }) => {
  const dispatch = useDispatch()

  const handleRemoveAllClick = () => {
    dispatch(removeAllDisableAction())
  }

  return (
    <>
      <header>
        <Nav />
        <h1
          className={pathname === '/' ? null : 'd-inline-block align-middle mb-0'}
        >
          {pathname === '/' ? 'Currencies' : 'Favourites'}
        </h1>
        {pathname !== '/' ? (
          <button
            className="btn btn-danger btn-sm ml-3"
            onClick={handleRemoveAllClick}
            type="button"
          >
            Remove All
          </button>
        ) : null}
      </header>
      <main className="container">
        {children}
      </main>
    </>
  )
}

export default withRouter(MainTemplate)

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}
