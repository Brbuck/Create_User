import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required().min(3).max(30),
  email: yup.string().email().required().min(5),
  password: yup.string().required().min(6),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null])
}).required();