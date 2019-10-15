export function ShowDialog(payload = false) {
  return {
    type: 'SHOW_DIALOG',
    payload
  }
}