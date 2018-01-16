import Description from "./Description/index"
import {connect} from "react-redux"
import CardGrid from "../../../../CardGrid/index"

const mapStateToProps = state => {
    const items = state.characters.map(character => (
        {
            title: character.name,
            image: character.image,
            children: Description({description: character.description}),
        }
    ))

    return {
        items,
    }
}

const CharacterList = connect(mapStateToProps)(CardGrid)

export default CharacterList
