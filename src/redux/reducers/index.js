import wizardReducer from "./wizard"
import {combineReducers} from "redux"

const dndApp = combineReducers({wizard: wizardReducer})

export default dndApp
