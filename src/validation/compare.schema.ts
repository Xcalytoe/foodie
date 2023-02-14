import * as yup from 'yup';

export const compareFormSchema = yup
  .object()
  .shape({
    query: yup.string().required('Field should not be empty'),
  })
  .required();
