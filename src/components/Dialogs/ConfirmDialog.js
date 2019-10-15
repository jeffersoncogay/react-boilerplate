import React, { useState } from 'react'
import { DialogContainer, TextField, Button, FontIcon } from 'react-md'

export default function({
  onCloseDialog, message, onConfirm, title
}) {

  const actions = [
    { secondary: true, children: 'Cancel', onClick: onCloseDialog },
    <Button flat primary onClick={onConfirm}>Confirm</Button>
  ]

  return (
    <div>
      <DialogContainer
        modal
        id="confirm-dialog"
        visible={true}
        onHide={onCloseDialog}
        actions={actions}
        title={
          <span
            style={{ color: 'red' }}
          >
            { title || 'Confirm Delete' }
          </span>
        }
      >
        {
          message || 'Are you sure you want to delete this record?'
        }
      </DialogContainer>
    </div>
  )
}
