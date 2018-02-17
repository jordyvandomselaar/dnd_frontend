import Wizard from "../Wizard"
import {connect} from "react-redux"
import {wizardUpdateValue} from "../../redux/actions"

const mapStateToProps = state => ({
    characterData: state.wizard.data,
})

const mapDispatchToProps = dispatch => ({
    saveData: (field, value) => dispatch(wizardUpdateValue(field, value)),
})

const PersistentWizard = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Wizard)

export default PersistentWizard
