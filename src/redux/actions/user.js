export function GetUserList() {
  return {
    type: 'GET_USER_LIST_REQUESTED'
  }
}

export function CreateUser(payload) {
  return {
    type: 'CREATE_USER_REQUESTED',
    payload
  }
}

export function UpdateUser(payload) {
  return {
    type: 'UPDATE_USER_REQUESTED',
    payload
  }
}

export function DeleteUser(payload) {
  return {
    type: 'DELETE_USER_REQUESTED',
    payload
  }
}