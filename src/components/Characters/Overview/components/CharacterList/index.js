import {connect} from "react-redux"
import CardGrid from "../../../../CardGrid/index"

const mapStateToProps = state => {
    const items = state.characters.map(character => (
        {
            title: character.name,
            image: character.image,
        }
    ))

    return {
        items,
    }
}

const CharacterList = connect(mapStateToProps)(CardGrid)

export default CharacterList
