export const load = () => {
    try {
        const serializedState = localStorage.getItem("state")

        if(!serializedState) return undefined

        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const save = state => {
    try {
        localStorage.setItem("state", JSON.stringify(state))
    } catch (err) {
        // Something went wrong…
    }
}
