import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <ul className="nav nav-pills justify-content-center my-4">
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          to="/"
          activeclass="active"
        >
          Currencies
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/favourites"
          activeclass="active"
        >
          Favourites
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav
