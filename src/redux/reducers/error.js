const INITIAL_STATE = {
  data: null
}

const actionHandlers = {
  ERROR_401: (state, action) => {
    return { ...state, data: action.payload }
  },
  ERROR_400: (state, action)=> {
    return { ...state, data: action.payload }
  }
}

export default (state = INITIAL_STATE, action) => {
  if (actionHandlers.hasOwnProperty(action.type)) {
    return actionHandlers[action.type](state, action)
  }
  return state
}