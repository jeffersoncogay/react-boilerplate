import { put, takeLatest, call, all, select } from 'redux-saga/effects'
import { axios } from '../../utils'
import {
  ShowDialog
} from '../actions'

function *GetUserList() {
  const result = yield call(axios, { method: 'get' }, 'GET_USER_LIST')
  if (result.type === 'GET_USER_LIST') {
    yield put(result)
  }
}

function *UpdateUser({ payload }) {
  const { company, ...rest } = payload
  const { list } = yield select(state => state.user)

  yield all([
    put({
      type: 'UPDATE_USER',
      payload: list.map(e => {
        if (payload.id === e.id) {
          return {
            ...e,
            ...rest,
            company: {
              ...e.company,
              name: company
            }
          }
        }
        return e
      })
    }),
    put(ShowDialog(false))
  ])
}

function *DeleteUser({ payload }) {
  const { list } = yield select(state => state.user)

  yield all([
    put({
      type: 'UPDATE_USER',
      payload: list.filter(e => e.id !== payload)
    }),
    put(ShowDialog(false))
  ])
}

export default function *() {
  yield takeLatest('GET_USER_LIST_REQUESTED', GetUserList)
  yield takeLatest('UPDATE_USER_REQUESTED', UpdateUser)
  yield takeLatest('DELETE_USER_REQUESTED', DeleteUser)
}