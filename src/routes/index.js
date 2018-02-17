import PersistentWizard from "../components/PersistentWizard"
import Overview from "../components/Characters/Overview"
import Home from "../components/Home"

const routes = {
    home: {
        path: "/",
        component: Home,
        exact: true,
    },
    characters_index: {
        path: "/characters",
        component: Overview,
        exact: true,
    },
    wizard_index: {
        path: "/characters/wizard",
        component: PersistentWizard,
    },
}

/**
 * Parse routes.
 *
 * @param {string} route
 * @param {*[]} parameters
 */
export const route = (route, parameters = []) => {
    let path = route.path

    /**
     * Looks for any parts starting with a double colon; /foo/:bar
     *
     * @type {RegExp}
     */
    const regex = /:.+?(\/|$)/

    // Replace any found parts with provided parameters.
    parameters.forEach(parameter => path = path.replace(regex, `${parameter}$1`))

    return path
}

export default routes
