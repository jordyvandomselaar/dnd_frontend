import {save} from "../persistence/localstorage"

let timeout

/**
 * Automatically persist state to localstorage every 500ms.
 *
 * @param {Object} store
 * @returns {function(*): function(*=)}
 */
export const persistToLocalStorage = store => next => action => {
    try {
        next(action)

        clearTimeout(timeout)
        timeout = setTimeout(() => save(store.getState()), 500)
    } catch (err) {
        console.error(err)
    }
}
