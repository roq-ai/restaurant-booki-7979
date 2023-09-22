import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  capacity: yup.number().integer().required(),
  owner_id: yup.string().nullable().required(),
});
