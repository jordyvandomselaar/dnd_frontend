import createReducer from "../utils/createReducer"

const initialState = [
    {
        id: 1,
        name: "Gentoo",
        class: "Blackguard",
        race: "Dragonborn",
        alignment: "Evil",
        deity: "",
        description: "My fav char <3",
        image: "https://via.placeholder.com/350x150",
    },
]

const CharactersReducer = createReducer(initialState, {})

export default CharactersReducer
