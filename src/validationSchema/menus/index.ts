import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  description: yup.string().nullable(),
  restaurant_id: yup.string().nullable().required(),
});
