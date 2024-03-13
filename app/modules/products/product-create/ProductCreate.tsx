import {FC, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Fail, Icon, Success, getAllCategories, getAllUnits} from '../../../../_metronic/helpers'
import {useQuery} from 'react-query'
import {Field, Form, Formik} from 'formik'
import Swal from 'sweetalert2'
import {useQueryResponse} from '../products-list/core/QueryResponseProvider'
import {Product, ProductFormData, initValues} from '../core/models'
import {
  createProduct,
  getAllColors,
  getAllVats,
  getProductById,
  updateProduct,
} from '../core/requests'
import {validationSchema} from './core/init'

type ProductFormProps = {
  productForUpdate?: Product
  refetchProduct?: () => void
}

const ProductForm: FC<ProductFormProps> = ({productForUpdate, refetchProduct}) => {
  const navigate = useNavigate()
  const {refetch} = useQueryResponse()

  const {data: categories, isLoading: categoriesLoading} = useQuery('categories', getAllCategories)
  const {data: units, isLoading: unitsLoading} = useQuery('units', getAllUnits)
  const {data: vats, isLoading: vatsLoading} = useQuery('vats', getAllVats)
  const {data: colors, isLoading: colorsLoading} = useQuery('colors', getAllColors)

  // State to store checkbox status for each category
  const [colorActive, setColorActive] = useState<boolean>(!!productForUpdate?.color)

  // Toggle the active status for a category
  const handleColorToggle = () => {
    setColorActive(!colorActive)
  }

  const formValues: ProductFormData = {
    code: productForUpdate?.code || initValues.code,
    label: productForUpdate?.label || initValues.label,
    description: productForUpdate?.description || initValues.description,
    category: productForUpdate?.category.id || initValues.category,
    price: productForUpdate?.price || initValues.price,
    minStock: productForUpdate?.minStock || initValues.minStock,
    maxStock: productForUpdate?.maxStock || initValues.maxStock,
    unit: productForUpdate?.unit.id || initValues.unit,
    color: productForUpdate?.color?.id || initValues.color,
    vat: productForUpdate?.vat?.id || initValues.vat,
    allowManufactureEmpty:
      productForUpdate?.allowManufactureEmpty || initValues.allowManufactureEmpty,
  }

  const onSubmit = async (values: ProductFormData) => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Veuillez vérifier les détails suivants pour vous assurer qu'ils sont corrects avant de poursuivre.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, confirmer',
      cancelButtonText: 'Non, annulez !',
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log('Form submitted with values: ', values)

        const formData = {
          code: values.code,
          label: values.label,
          description: values.description,
          categoryId: values.category,
          price: values.price,
          minStock: values.minStock,
          maxStock: values.maxStock,
          unitId: values.unit,
          colorId: values.color,
          vatId: values.vat,
        }

        try {
          if (productForUpdate) {
            await updateProduct(productForUpdate.id, formData) // Implement this function to update the product
            Success.fire({
              title: 'Product mis à jour!',
              text: 'Product mis à jour avec succès',
            }).then(() => {
              if (refetchProduct) {
                refetchProduct()
              }
            })
          } else {
            await createProduct(formData)
            Success.fire({
              title: 'Product créé!',
              text: 'Product créé avec succès',
            })
          }
          refetch()
          navigate(-1)
        } catch (error: any) {
          console.log(error)
          Fail.fire({
            title: 'Error!',
            text: error.message,
          })
        }
      }
    })
  }

  const handleGoBack = () => {
    navigate(-1) // Navigate back to the previous page
  }
  return (
    <Formik initialValues={formValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({touched, errors, values}) => (
        <Form>
          <div className='card'>
            <div className='card-header'>
              <div className='card-title'>
                <h2>Informations</h2>
              </div>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-12 col-sm-3'>
                  <label className='form-label required'>Code product</label>
                  <Field
                    type='text'
                    name='code'
                    className='form-control form-control-solid'
                    placeholder='Référence interne'
                  />
                  {touched.code && errors.code && <div className='text-danger'>{errors.code}</div>}
                </div>
                <div className='col-12 col-sm-4'>
                  <label className='form-label required'>Libellé</label>
                  <Field
                    type='text'
                    name='label'
                    className='form-control form-control-solid'
                    placeholder='Intitule de product/service'
                  />
                  {touched.label && errors.label && (
                    <div className='text-danger'>{errors.label}</div>
                  )}
                </div>
                <div className='col-12 col-sm-3'>
                  <label className='form-label required'>Prix achat</label>

                  <div className='input-group input-group-solid'>
                    <Field
                      type='number'
                      name='price'
                      className='form-control form-control-solid'
                      placeholder='Prix public'
                    />
                    <span className='input-group-text'>TND</span>
                  </div>
                  {touched.price && errors.price && (
                    <div className='text-danger'>{errors.price}</div>
                  )}
                </div>
                <div className='col-12 col-sm-2'>
                  <label className='form-label required'>TVA</label>
                  <Field
                    as='select'
                    name='vat'
                    className='form-select form-select-solid'
                    disabled={vatsLoading}
                  >
                    <option hidden value=''>
                      Sélectionner TVA
                    </option>
                    {vats &&
                      vats.map((vat) => (
                        <option key={vat.id} value={vat.id}>
                          {(vat.value * 100).toFixed(0)}%
                        </option>
                      ))}
                  </Field>
                  {touched.vat && errors.vat && <div className='text-danger'>{errors.vat}</div>}
                </div>
              </div>

              <div className='row'>
                <div className='col-12 col-sm-3'>
                  <label className='form-label required'>Catégorie</label>
                  <Field
                    as='select'
                    name='category'
                    className='form-select form-select-solid'
                    disabled={categoriesLoading}
                  >
                    <option hidden value=''>
                      Sélectionner catégorie
                    </option>
                    {categories &&
                      categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                  </Field>
                </div>
                <div className='col-12 col-sm-9'>
                  <label className='form-label'>Description</label>
                  <Field
                    as='textarea'
                    name='description'
                    className='form-control form-control-lg form-control-solid'
                    rows={1}
                    placeholder={'Decriver votre product/services ici...'}
                  />
                </div>
                {touched.description && errors.description && (
                  <div className='text-danger'>{errors.description}</div>
                )}
              </div>
            </div>

            <div className='card-header'>
              <div className='card-title'>
                <h2>Plus de détails</h2>
              </div>
            </div>

            <div className='card-body'>
              <div className='row mb-2'>
                <div className='col-4 col-sm-2 mt-2 d-flex justify-content-start align-items-center'>
                  <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                    <Field
                      type='checkbox'
                      name='check-color'
                      className='form-check-input'
                      checked={colorActive}
                      onChange={() => handleColorToggle()}
                    />
                    <label className='form-check-label'>Couleur</label>
                  </div>
                </div>
              </div>
              <div className='row mb-5'>
                {colorActive && (
                  <div className='col-12 col-sm-3 mt-2'>
                    <label className='form-label required'>Couleur</label>
                    <div className='d-flex justify-content-center'>
                      <Field
                        as='select'
                        name='color'
                        className='form-select form-select-solid'
                        disabled={colorsLoading}
                      >
                        <option hidden value=''>
                          Sélectionner couleur
                        </option>
                        {colors &&
                          colors.map((value) => (
                            <option key={value.id} value={value.id}>
                              {value.label}
                            </option>
                          ))}
                      </Field>

                      <div
                        className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-success w-40px h-40px ms-2'
                        data-bs-toggle='modal'
                        data-bs-target='#modal_create_color'
                      >
                        <Icon iconName='plus' className={'fs-1'} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className='row'>
                <div className='col-12 col-sm-3'>
                  <label className='form-label text-success'>Stock maximum</label>
                  <Field
                    type='number'
                    name='maxStock'
                    className='form-control form-control-solid'
                  />
                </div>
                <div className='col-12 col-sm-3'>
                  <label className='form-label text-danger'>Stock minimum</label>

                  <Field
                    type='number'
                    name='minStock'
                    className='form-control form-control-solid'
                  />
                </div>
                <div className='col-12 col-sm-3'>
                  <label className='form-label'>Unité</label>

                  <Field
                    as='select'
                    name='unit'
                    className='form-select form-select-solid'
                    disabled={unitsLoading}
                  >
                    <option hidden value=''>
                      Sélectionner unité
                    </option>
                    {units &&
                      units.map((value) => (
                        <option key={value.id} value={value.id}>
                          {value.label}
                        </option>
                      ))}
                  </Field>
                </div>
                <div className='col-12 col-sm-3'>
                  <label className='form-label'>Stock</label>

                  <Field as='select' name='stock' className='form-select form-select-solid' disable>
                    <option value=''>Aucun stock disponible</option>
                  </Field>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <div className='form-check form-check-sm mt-4'>
                    <input className='form-check-input' type='checkbox' id='flexCheckDefault' />
                    <label className='form-check-label' htmlFor='flexCheckDefault'>
                      Permettre la vente même si le stock est vide
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-footer text-end'>
              <button type='submit' className='btn btn-sm btn-primary me-3'>
                Enregistrer
              </button>
              <button type='reset' className='btn btn-sm btn-danger' onClick={handleGoBack}>
                Annuler
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

const ProductCreate: FC = () => {
  const {id} = useParams()

  const {
    data: productData,
    refetch,
    isLoading: productDataLoading,
  } = useQuery(
    `product-${id}`, // Unique query key based on productId
    () => getProductById(Number(id)), // Fetch product data based on productId
    {
      enabled: !!id, // Enable query only when productId is available
    }
  )
  const refetchProduct = refetch || (() => {})

  if (productDataLoading)
    <div className='d-flex justify-content-center align-items-center' style={{height: '75vh'}}>
      <div className='spinner-border text-primary' role='status'>
        <span className='visually-hidden'>Chargement...</span>
      </div>
    </div>
  if (productData)
    return <ProductForm productForUpdate={productData} refetchProduct={refetchProduct} />

  return <ProductForm />
}

export default ProductCreate
