import React, {Fragment} from "react"
import {BrowserRouter, Route} from "react-router-dom"
import routes from "../../routes"
import {Reboot} from "material-ui"
import {Provider} from "react-redux"
import dndApp from "../../redux/reducers"
import {applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import {persistToLocalStorage} from "../../redux/middleware"
import {load} from "../../redux/persistence/localstorage"
import Main from "../Layouts/Main/Main"

const routeComponents = (() => {
    let routeComponents = []

    for (let key in routes) {
        if (!routes.hasOwnProperty(key)) continue

        routeComponents = [...routeComponents, <Route key={key} {...routes[key]}/>]
    }

    return routeComponents
})()

const persistedState = load()

const store = createStore(dndApp, persistedState, composeWithDevTools(
    applyMiddleware(persistToLocalStorage),
))

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Fragment>
                <Reboot/>

                <Main>
                    {routeComponents}
                </Main>

            </Fragment>
        </BrowserRouter>
    </Provider>
)

export default App
