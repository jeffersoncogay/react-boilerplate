const INITIAL_STATE = {
  dialog: {}
}

const actionHandlers = {
  SHOW_DIALOG: (state, action) => {
    return {
      ...state,
      dialog: {
        ...(action.payload || {})
      }
    }
  }
}

export default (state = INITIAL_STATE, action) => {
  if (actionHandlers.hasOwnProperty(action.type)) {
    return actionHandlers[action.type](state, action)
  }
  return state
}