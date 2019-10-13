import { fork, all } from 'redux-saga/effects'
import user from './user'

export default function* () {
  yield all([
    fork(user)
  ])
}