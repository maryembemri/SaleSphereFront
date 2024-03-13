import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword} from '../core/_requests'

const initialValues = {
  email: 'admin@demo.com',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        requestPassword(values.email)
          .then(({data: {result}}) => {
            setHasErrors(false)
            setLoading(false)
          })
          .catch(() => {
            setHasErrors(true)
            setLoading(false)
            setSubmitting(false)
            setStatus('Les détails de connexion sont incorrects.')
          })
      }, 1000)
    },
  })

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='login_password_reset_form'
      onSubmit={formik.handleSubmit}
    >
      <div className='text-center mb-10'>
        {/* begin::Title */}
        <h1 className='text-dark fw-bolder mb-3'>Mot de passe oublié ?</h1>
        {/* end::Title */}

        {/* begin::Link */}
        <div className='text-gray-500 fw-semibold fs-6'>
          Entrez votre adresse e-mail pour réinitialiser votre mot de passe.
        </div>
        {/* end::Link */}
      </div>

      {/* begin::Title */}
      {hasErrors === true && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>
            Désolé, il semble y avoir des erreurs détectées, veuillez réessayer.
          </div>
        </div>
      )}

      {hasErrors === false && (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>
            Réinitialisation du mot de passe envoyée. Veuillez vérifier votre e-mail.
          </div>
        </div>
      )}
      {/* end::Title */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <label className='form-label fw-bolder text-gray-900 fs-6'>E-mail</label>
        <input
          type='email'
          placeholder=''
          autoComplete='off'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
        <button type='submit' id='password_reset_submit' className='btn btn-primary me-4'>
          <span className='indicator-label'>Soumettre</span>
          {loading && (
            <span className='indicator-progress'>
              Veuillez patienter...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/auth/login'>
          <button
            type='button'
            id='login_password_reset_form_cancel_button'
            className='btn btn-light'
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Annuler
          </button>
        </Link>{' '}
      </div>
      {/* end::Form group */}
    </form>
  )
}
