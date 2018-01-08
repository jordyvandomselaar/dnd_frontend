import {save} from "../persistence/localstorage"

let timeout

export const persistToLocalStorage = store => next => action => {
    try {
        next(action)

        clearTimeout(timeout)
        timeout = setTimeout(() => save(store.getState()), 500)
    } catch (err) {
        console.error(err)
    }
}
