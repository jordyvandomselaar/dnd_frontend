import createReducer from "../utils/createReducer"
import {WIZARD_UPDATE_VALUE} from "../actions"
import updateObject from "../utils/updateObject"

const initialState = {
    nextUrl: "/characters/wizard/physical-information",
    data: {},
}

/**
 * Update value in character wizard state.
 *
 * @param {Object} state
 * @param {Object} data
 * @param {*} data.field
 * @param {*} data.value
 * @returns {{}}
 */
const updateValue = (state, {field, value}) => {
    const data = updateObject(state.data, {[field]: value})

    state = {...state, data: data}

    return state
}

const wizardReducer = createReducer(initialState, {
    [WIZARD_UPDATE_VALUE]: updateValue,
})

export default wizardReducer
