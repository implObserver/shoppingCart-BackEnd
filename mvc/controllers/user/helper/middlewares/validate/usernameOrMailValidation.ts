import validator from 'validator';

export const validateUsernameOrMail = (field: string) => {
  const sanitizedField = sanitizeField(field);

  if (isMail(sanitizedField)) {
    return true;
  } else if (isUsernameValid(sanitizedField)) {
    return true;
  }

  throw new Error('Invalid email or username.');
};

const sanitizeField = (field: string) => {
  return validator.trim(validator.escape(field));
};

const isMail = (field: string) => {
  return validator.isEmail(field);
};

const isUsernameValid = (username: string) => {
  return username.length > 0;
};
