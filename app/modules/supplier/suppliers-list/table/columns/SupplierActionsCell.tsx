/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Fail, Icon, Success, generateReference} from '../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {Supplier} from '../../../core/models'
import {archiveSupplier} from '../../../core/requests'
type Props = {
  supplier: Supplier
}

const SupplierActionsCell: FC<Props> = ({supplier}) => {
  const {refetch} = useQueryResponse()
  const handleArchive = () => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: supplier.isArchived
        ? 'Souhaitez-vous activer ce fournisseur ?'
        : 'Souhaitez-vous archiver ce fournisseur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: supplier.isArchived ? 'Oui, activer' : 'Oui, archiver',
      cancelButtonText: 'Non, annulez!',
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await archiveSupplier(supplier.id, !supplier.isArchived)
          Success.fire({
            title: supplier.isArchived ? 'Supplier activé' : 'Supplier archivé!',
            text: supplier.isArchived
              ? `Le fournisseur ${generateReference('FR', supplier.id)} est activé`
              : `Le fournisseur ${generateReference('FR', supplier.id)} est archivé`,
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
        to={`/suppliers/list/edit/${supplier.id}`}
        className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px'
      >
        <Icon iconName='pencil' className='fs-4 me-1' />
      </Link>
      <Link
        to={`/suppliers/list/show/${supplier.id}/informations`}
        className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px'
      >
        <Icon iconName='eye' className='fs-4 me-1' />
      </Link>
      <button
        onClick={handleArchive}
        className={`btn btn-icon btn-custom ${
          supplier.isArchived
            ? 'btn-icon-success btn-active-light-success btn-active-color-success'
            : 'btn-icon-danger btn-active-light-danger btn-active-color-danger'
        }  w-35px h-35px`}
      >
        {supplier.isArchived ? (
          <Icon iconName='arrows-circle' className='fs-4 me-1' />
        ) : (
          <Icon iconName='archive' className='fs-4 me-1' />
        )}
      </button>
    </div>
  )
}

export {SupplierActionsCell}
