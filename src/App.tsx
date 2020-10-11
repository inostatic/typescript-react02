import React from 'react'
import {Header} from './components/Header/Header'
import {DataPage} from './pages/DataPage'
import {AboutPage} from './pages/AboutPage'
import {Switch, Route} from 'react-router-dom'
import './scss/index.scss'


export const App: React.FC = () => {

    

    return (
        <div className="app">
            <Header/>
            <Switch>
                <Route component={DataPage} path="/" exact></Route>
                <Route component={AboutPage} path="/about"></Route>
            </Switch>
        </div>
    )

}