import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    label: Yup.string().required('Le libellé est requis'),
    price: Yup.number().required('Le prix public est requis'),
    code: Yup.string().required('Le code produit est requis'),
    vat: Yup.string().required('La TVA est requise'),
    category: Yup.string().required('La catégorie est requise'),
    description: Yup.string(),
    maxStock: Yup.number().nullable(),
    minStock: Yup.number().nullable(),
    stock: Yup.string().nullable(),
    image: Yup.mixed().nullable(),
    // You can add additional validation rules as needed for other fields
});


export { validationSchema }

