import wizardReducer from "./wizard"
import {combineReducers} from "redux"
import CharactersReducer from "./characters"

const dndApp = combineReducers(
    {
        wizard: wizardReducer,
        characters: CharactersReducer,
    },
)

export default dndApp
