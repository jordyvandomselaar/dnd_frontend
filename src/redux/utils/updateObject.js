/**
 * Merge two objects.
 *
 * @param {Object} oldObject
 * @param {Object} newValues
 * @returns {{}}
 */
const updateObject = (oldObject, newValues) => ({...oldObject, ...newValues})

export default updateObject
