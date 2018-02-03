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
    characters_show: {
        path: "/characters/:id",
        component: "<p>Hi!</p>",
    },
    wizard_index: {
        path: "/characters/wizard",
        component: PersistentWizard,
    },
}

export const route = (route, parameters = []) => {
    let path = route.path

    parameters.forEach(parameter => path = path.replace(/:.+?(\/|$)/, `${parameter}$1`))

    return path
}

export default routes
