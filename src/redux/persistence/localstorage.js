/**
 * Load state from localstorage.
 *
 * @returns {Object}
 */
export const load = () => {
    try {
        const serializedState = localStorage.getItem("state")

        if(!serializedState) return undefined

        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

/**
 * Save state to localstorage.
 *
 * @param {Object} state
 */
export const save = state => {
    try {
        localStorage.setItem("state", JSON.stringify(state))
    } catch (err) {
        // Something went wrong…
    }
}
