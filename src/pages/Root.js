import store from 'store'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainTemplate from 'templates/MainTemplate'
import Home from 'pages/Home'
import Favourites from 'pages/Favourites'

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/favourites"
            component={Favourites}
          />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
)

export default Root
