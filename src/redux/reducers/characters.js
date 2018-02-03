import createReducer from "../utils/createReducer"
import {RECEIVE_CHARACTERS} from "../actions"
import updateObject from "../utils/updateObject"

const initialState = {
    characters: [],
}


const receiveCharacters = (state, {characters}) => updateObject(state, {characters})

const CharactersReducer = createReducer(initialState, {
    [RECEIVE_CHARACTERS]: receiveCharacters,
})

export default CharactersReducer
