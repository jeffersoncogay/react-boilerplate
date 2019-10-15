import { createSelector } from 'reselect'

export default createSelector(
  state => state.user,
  state => state.common,
  (user, common) => {
    return {
      user: { ...user },
      ...common
    }
  }
)