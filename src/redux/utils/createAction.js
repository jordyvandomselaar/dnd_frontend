/**
 * @param {string} type
 * @param {Object} data
 * @returns {{type: *}}
 */
export const createAction = (type, data) => {
    return {
        type,
        ...data,
    }
}

export default createAction
