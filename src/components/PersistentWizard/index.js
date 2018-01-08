import Wizard from "../Wizard"
import {connect} from "react-redux"
import {wizardUpdateValue} from "../../redux/actions"

const mapStateToProps = state => {
    return {
        characterData: state.wizard,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveData: (field, value) => dispatch(wizardUpdateValue(field, value)),
    }
}

const PersistentWizard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Wizard)

export default PersistentWizard
