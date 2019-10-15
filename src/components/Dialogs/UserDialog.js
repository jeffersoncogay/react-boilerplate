import React, { useState } from 'react'
import { DialogContainer, TextField, Button, FontIcon } from 'react-md'

export default function({
  onCloseDialog, data, onChange, onSave, errors, title
}) {

  const actions = [
    { secondary: true, children: 'Cancel', onClick: onCloseDialog },
    <Button flat primary onClick={onSave}>Save</Button>
  ]

  return (
    <div>
      <DialogContainer
        id="user-dialog"
        visible={true}
        onHide={onCloseDialog}
        actions={actions}
        modal
        title={title}
      >
        <TextField
          id="name"
          label="Name"
          leftIcon={<FontIcon>person</FontIcon>}
          size={10}
          value={data.name}
          onChange={(data) => onChange(data, 'name')}
          error={!!errors.name}
          errorText={errors.name}
        />
        <TextField
          id="company"
          label="Company"
          leftIcon={<FontIcon>work</FontIcon>}
          size={10}
          value={data.company}
          onChange={(data) => onChange(data, 'company')}
          error={!!errors.company}
          errorText={errors.company}
        />
        <TextField
          id="website"
          label="Website"
          leftIcon={<FontIcon>public</FontIcon>}
          size={10}
          value={data.website}
          onChange={(data) => onChange(data, 'website')}
          error={!!errors.website}
          errorText={errors.website}
        />
      </DialogContainer>
    </div>
  )
}
