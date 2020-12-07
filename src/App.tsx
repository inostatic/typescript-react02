import React from 'react'
import './scss/index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/createStore'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'
import { Header } from './components/Header/Header'
import { DataPage } from './pages/DataPage'
import { AboutPage } from './pages/AboutPage'

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route component={DataPage} path="/" exact></Route>
            <Route component={AboutPage} path="/about" exact></Route>
            <Redirect to={'/'} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}
