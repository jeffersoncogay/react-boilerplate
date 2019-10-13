import { put, takeLatest, call } from 'redux-saga/effects'
import { axios } from '../../utils'
import uuid from 'uuidv4'

function *GetUserList() {
  const result = yield call(axios, { method: 'get' }, 'GET_USER_LIST')
  if (result.type === 'GET_USER_LIST') {
    yield put(result)
  }
}

function *AddUser({ payload }) {
  const result = yield call(axios, { method: 'post', data: payload }, 'ADD_USER')
  if (result.type === 'ADD_USER') {
    yield put(result)
  }
}

export default function *() {
  yield takeLatest('GET_USER_LIST_REQUESTED', GetUserList)
  yield takeLatest('ADD_USER', AddUser) 
}