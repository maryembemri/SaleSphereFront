import * as Yup from 'yup';

const validationSchema =
    Yup.object().shape({
        name: Yup.string().required('Le nom est requis'),
        email: Yup.string()
            .required('L\'email est requis')
            .email('Le format de l\'email est incorrect'),
        password: Yup.string()
            .required('Le mot de passe est requis')
            .min(6, ({ min }) => `Le mot de passe doit contenir au moins ${min} caractères`)
            .max(20, ({ max }) => `Le mot de passe doit contenir au max ${max} caractères`)
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
                'Le mot de passe doit contenir au moins un de ces éléments : ' +
                'lettre majuscule, lettre minuscule, chiffre et caractère spécial'
            )
            .label('Password'),
        confirmPassword: Yup.string()
            .required('La confirmation du mot de passe est requise')
            .oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas')
            .label('Confirm Password'),
        position: Yup.string().required('La position est requise'),
        // permissions: Yup.array().of(Yup.string()).required('Au moins une permission est requise'),
    });

export { validationSchema }