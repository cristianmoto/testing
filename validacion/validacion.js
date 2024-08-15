import {object, string, ref} from "yup"
export const validacion = object ().shape({
    email : string().required("Mail requerido").email("no valido"),
    password: string().required("Clave requerida").min(6, "mayor a 6 caracteres"),
    confirmPassword: string().oneOf([ref("clave"), null, "clave debe coincidir"]).required(),

});