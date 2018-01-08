import React, {Fragment} from "react"
import {BrowserRouter, Route} from "react-router-dom"
import routes from "../../routes"
import {Reboot} from "material-ui"
import {Helmet} from "react-helmet"
import {Provider} from "react-redux"
import dndApp from "../../redux/reducers"
import {applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import {persistToLocalStorage} from "../../redux/middleware"
import {load} from "../../redux/persistence/localstorage"

const routesComponents = routes.map((route, i) => <Route key={i} {...route} />)

const persistedState = load()

const store = createStore(dndApp, persistedState, composeWithDevTools(
    applyMiddleware(persistToLocalStorage),
))

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Fragment>
                <Reboot/>

                <Helmet>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                </Helmet>

                {routesComponents}

            </Fragment>
        </BrowserRouter>
    </Provider>
)

export default App
