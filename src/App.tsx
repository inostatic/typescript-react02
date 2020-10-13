import React from 'react'
import {Header} from './components/Header/Header'
import {DataPage} from './pages/DataPage'
import {AboutPage} from './pages/AboutPage'
import {Switch, Route} from 'react-router-dom'
import './scss/index.scss'
import {useSelector} from "react-redux"
import {AppState} from "./redux/createStore"


export const App: React.FC = () => {
    const pathname = useSelector((state: AppState) => state.select.path)
    

    return (
        <div className="app">
            <Header pathname={pathname}/>
            <Switch>
                <Route component={DataPage} path="/" exact></Route>
                <Route component={AboutPage} path="/about"></Route>
            </Switch>
        </div>
    )

}