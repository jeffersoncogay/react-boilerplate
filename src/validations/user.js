import Validator from 'validator'

export default function (data) {
  let errors = {}

  if (Validator.isEmpty(data.name.trim())) {
    errors.name = 'Name is required.'
  }
  if (Validator.isEmpty(data.company.trim())) {
    errors.company = 'Company is required.'
  }
  if (Validator.isEmpty(data.website.trim())) {
    errors.website = 'Website is required.'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}