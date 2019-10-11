'use strict'

function *GetUserList() {
  console.log('Saga Here')
}

export default function *() {
  yield takeLatest('GET_USER_LIST', GetUserList)
}