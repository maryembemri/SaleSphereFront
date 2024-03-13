import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
    type: Yup.string().required('Le type de client est requis'),
    name: Yup.string().required('La raison sociale / nom est requise'),
    email: Yup.string().email('Adresse e-mail non valide'),
    register: Yup.string(),
    website: Yup.string().url('URL du site Web non valide'),
    isExempt: Yup.boolean(),
    taxNumber: Yup.string().required('Le matricule fiscale est requis'),

    mobile: Yup.number()
        .required('Le numéro de mobile est requis')
        .typeError('Le numéro de mobile doit être un nombre')
        .min(10000000, 'Numéro de mobile invalide')
        .max(99999999, 'Numéro de mobile invalide'),
    phone: Yup.number()
        .typeError('Le numéro de téléphone doit être un nombre')
        .min(10000000, 'Numéro de téléphone invalide')
        .max(99999999, 'Numéro de téléphone invalide'),
    address: Yup.string(),
});


export { validationSchema }