export const delay = async () => {
  return new Promise((resolve, error) => {
    setTimeout(resolve, 1000);
  });
};

export const validateCar = (values: any) => {
  const errors: any = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.police) {
    errors.police = 'Required';
  } else if (values.police.length > 11) {
    errors.police = 'Must be 11 characters or less';
  }

  return errors;

};