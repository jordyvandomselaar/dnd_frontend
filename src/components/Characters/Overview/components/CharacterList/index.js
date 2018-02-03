import {connect} from "react-redux"
import CardGrid from "../../../../CharacterGrid/index"
import {loadCharacters} from "../../../../../redux/actions"
import {Component} from "react"

const mapStateToProps = state => {
    const characters = state.characters.characters

    return {
        characters,
    }

}

class CharacterList extends Component {
    componentDidMount() {
        const {dispatch} = this.props

        dispatch(loadCharacters())
    }

    render() {
        const {characters} = this.props

        return CardGrid({characters})
    }
}

export default connect(mapStateToProps)(CharacterList)
