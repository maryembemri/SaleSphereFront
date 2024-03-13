/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Fail, Icon, Success} from '../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import {Product} from '../../../core/models'
import {archiveProduct} from '../../../core/requests'
import {useQueryResponse} from '../../core/QueryResponseProvider'
type Props = {
  product: Product
}

const ProductActionsCell: FC<Props> = ({product}) => {
  const {refetch} = useQueryResponse()

  const handleArchive = () => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: product.isArchived
        ? 'Souhaitez-vous activer ce product ?'
        : 'Souhaitez-vous archiver ce product ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: product.isArchived ? 'Oui, activer' : 'Oui, archiver',
      cancelButtonText: 'Non, annulez!',
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await archiveProduct(product.id, !product.isArchived)
          Success.fire({
            title: product.isArchived ? 'Product activé' : 'Product archivé!',
            text: product.isArchived
              ? `Le product ${product.code} est activé`
              : `Le product ${product.code} est archivé`,
          }).then(() => {
            refetch()
          })
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
  return (
    <div>
      <Link
        to={`/product/list/edit/${product.id}`}
        className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px'
      >
        <Icon iconName='pencil' className='fs-2 me-1' />
      </Link>
      <Link
        to={`/product/list/show/${product.id}/informations`}
        className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px'
      >
        <Icon iconName='eye' className='fs-2 me-1' />
      </Link>
      <button
        onClick={handleArchive}
        className={`btn btn-icon btn-custom ${
          product.isArchived
            ? 'btn-icon-success btn-active-light-success btn-active-color-success'
            : 'btn-icon-danger btn-active-light-danger btn-active-color-danger'
        }  w-35px h-35px`}
      >
        {product.isArchived ? (
          <Icon iconName='arrows-circle' className='fs-2 me-1' />
        ) : (
          <Icon iconName='archive' className='fs-2 me-1' />
        )}
      </button>
    </div>
  )
}

export {ProductActionsCell}
