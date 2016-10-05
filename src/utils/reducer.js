import isPlainObject from "is-plain-object";

/**
 * an elegance way to write reducer
 * @param funcMap the functions map
 * @param initState initiate state
 * @returns {Function}
 */
export const createReducer = (funcMap, initialState) => {
  if (!isPlainObject(funcMap)) {
    throw new Error('funcMap need to be a plain object');
  }

  return (state = initialState, action) =>  funcMap.hasOwnProperty(action.type)
    ? funcMap[action.type](state, action)
    : state;
};
