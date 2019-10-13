import { put, takeLatest } from 'redux-saga/effects'

function *GetUserList() {
  console.log('wew')
  yield put({ type: 'GET_USER_LIST', payload: [{ name: 'Jerosdfsdf', email: 'jero@gmail.com' }] })
}

export default function *() {
  yield takeLatest('GET_USER_LIST_REQUESTED', GetUserList)
}