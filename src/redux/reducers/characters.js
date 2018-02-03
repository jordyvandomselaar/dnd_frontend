import createReducer from "../utils/createReducer"
import {RECEIVE_CHARACTERS} from "../actions"
import updateObject from "../utils/updateObject"

const initialState = {
    characters: [],
}


/**
 * Save characters to state.
 *
 * @param {Object} state
 * @param {Object} action
 * @param {Object[]} action.characters
 * @returns {{}}
 */
const receiveCharacters = (state, {characters}) => updateObject(state, {characters})

const CharactersReducer = createReducer(initialState, {
    [RECEIVE_CHARACTERS]: receiveCharacters,
})

export default CharactersReducer
