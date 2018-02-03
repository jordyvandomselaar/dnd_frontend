import createReducer from "../utils/createReducer"
import {WIZARD_UPDATE_VALUE} from "../actions"
import updateObject from "../utils/updateObject"

const initialState = {}

/**
 *
 * @param state
 * @param value
 * @returns {{}}
 */
const updateValue = (state, {field, value}) => updateObject(state, {[field]: value})

const wizardReducer = createReducer(initialState, {
    [WIZARD_UPDATE_VALUE]: updateValue,
})

export default wizardReducer
