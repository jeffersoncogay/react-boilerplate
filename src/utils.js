import ax from 'axios'

export const axios = ({ method }, type) => {
  if (method === 'get') {
    return ax.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data, status }) => {
        if (status >= 400) {
          return {
            type: status === 401 ? 'ERROR_401' : 'ERROR_400',
            payload: data
          }
        }
        return { type, payload: data }
      })
  }
}