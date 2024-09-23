import * as yup from 'yup';
import { emailLoginRegex } from '../../utils/Regex/regexFormLogin';

export const validationSchema = yup.object({
  email: yup
    .string()
    .required("El correo es requerido")
    .matches(emailLoginRegex, "El correo debe ser válido y contener un @"),
  password: yup
    .string()
    .required("La contraseña es requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
})