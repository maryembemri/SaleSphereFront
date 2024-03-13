/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Fail, Icon, Success, generateReference} from '../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import {Client} from '../../../core/_models'
import {archiveClient} from '../../../core/_requests'
type Props = {
  client: Client
}

const ClientActionsCell: FC<Props> = ({client}) => {
  const handleArchive = () => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: client.isArchived
        ? 'Souhaitez-vous activer ce client ?'
        : 'Souhaitez-vous archiver ce client ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: client.isArchived ? 'Oui, activer' : 'Oui, archiver',
      cancelButtonText: 'Non, annulez!',
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await archiveClient(client.id, !client.isArchived)
          Success.fire({
            title: client.isArchived ? 'Client activé' : 'Client archivé!',
            text: client.isArchived
              ? `Le client ${generateReference('CL', client.id)} est activé`
              : `Le client ${generateReference('CL', client.id)} est archivé`,
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
        to={`/client/list/edit/${client.id}`}
        className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px'
      >
        <Icon iconName='pencil' className='fs-4 me-1' />
      </Link>
      <Link
        to={`/client/list/show/${client.id}/informations`}
        className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px'
      >
        <Icon iconName='eye' className='fs-4 me-1' />
      </Link>
      <button
        onClick={handleArchive}
        className={`btn btn-icon btn-custom ${
          client.isArchived
            ? 'btn-icon-success btn-active-light-success btn-active-color-success'
            : 'btn-icon-danger btn-active-light-danger btn-active-color-danger'
        }  w-35px h-35px`}
      >
        {client.isArchived ? (
          <Icon iconName='arrows-circle' className='fs-4 me-1' />
        ) : (
          <Icon iconName='archive' className='fs-4 me-1' />
        )}
      </button>
    </div>
  )
}

export {ClientActionsCell}
