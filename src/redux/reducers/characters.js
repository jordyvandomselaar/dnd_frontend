import createReducer from "../utils/createReducer"

const initialState = [
    {
        id: 1,
        name: "Gentoo",
        image: "https://via.placeholder.com/350x150",
    },
]

const CharactersReducer = createReducer(initialState, {})

export default CharactersReducer
