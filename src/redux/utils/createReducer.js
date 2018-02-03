/**
 * Create a new reducer in a short way.
 *
 * @param {Object} initialState
 * @param {Object} handlers
 * @returns {function(*=, *=)}
 */
const createReducer = (initialState, handlers) => (state = initialState, action) => {
    if(handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action)
    }

    return state
}

export default createReducer
