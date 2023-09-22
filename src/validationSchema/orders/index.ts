import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  total_price: yup.number().integer().required(),
  status: yup.string().required(),
  customer_id: yup.string().nullable().required(),
  waiter_id: yup.string().nullable().required(),
});
