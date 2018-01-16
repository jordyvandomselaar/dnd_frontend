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
    }
}

export default routes
