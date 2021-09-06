import { Car, CarRecord } from "./types";

export const delay = async () => {
  return new Promise((resolve, error) => {
    setTimeout(resolve, 1000);
  });
};

export const validateCar = (values: Car) => {
  const errors: {[key: string]: string} = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.police) {
    errors.police = 'Required';
  } else if (values.police.length > 9) {
    errors.lastName = 'Must be 9 characters or less';
  }

  return errors;

};