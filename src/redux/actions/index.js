import createAction from "../utils/createAction"

export const WIZARD_UPDATE_VALUE = "UPDATE_VALUE"
export const RECEIVE_CHARACTERS = "RECEIVE_CHARARACTERS"

/**
 * Set a new value in the character wizard.
 * @param field
 * @param value
 * @returns {{type: *}}
 */
export const wizardUpdateValue = (field, value) => createAction(WIZARD_UPDATE_VALUE, {field, value})

/**
 * Set characters in state.
 * @param characters
 * @returns {{type: *}}
 */
export const receiveCharacters = (characters) => createAction(RECEIVE_CHARACTERS, {characters})

/**
 * Fetch characters from api and set them in state.
 * @returns {function(*)}
 */
export const loadCharacters = () => async dispatch => {
    let characters = await fetch("http://localhost:8000/characters").then(response => response.json())

    characters = characters.map(character => {
        if (!character.image) {
            character.image = "https://i0.wp.com/www.nonzerosumgames.com/wp-content/uploads/2017/02/Cleric-Dark-Half-Curse_o-1_o.jpg"
        }

        return character
    })

    return dispatch(receiveCharacters(characters))
}
