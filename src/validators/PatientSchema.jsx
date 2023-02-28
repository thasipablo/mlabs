import * as yup from "yup";

export const patientSchema = yup.object({
  name: yup.string().required("Le nom est obligatoire"),
  phone: yup.string(),
  address: yup.string(),
  gender: yup.string(),
  year: yup.number('L\'âge doit être un nombre').positive('L\'âge ne peut pas être négatif'),
  weight: yup.number('La valeur doit être un nombre').positive('Le poid ne peut pas être négatif'),
  clinician: yup.string(),
});
