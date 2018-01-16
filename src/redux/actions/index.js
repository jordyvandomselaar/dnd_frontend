import createAction from "../utils/createAction"

export const WIZARD_UPDATE_VALUE = "UPDATE_VALUE"

export const wizardUpdateValue = (field, value) => createAction(WIZARD_UPDATE_VALUE, {field, value})
