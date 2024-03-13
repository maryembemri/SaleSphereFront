import Swal from 'sweetalert2'

export const showConfirmationDialog = (
  title: string,
  message: string,
  confirmText: string,
  cancelText: string
) => {
  return Swal.fire({
    title: title,
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    reverseButtons: false,
    buttonsStyling: false,
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
      popup: 'bg-body',
    },
  })
}

export const showDiscardDialog = (message: string, confirmText: string, cancelText: string) => {
  return Swal.fire({
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    reverseButtons: true,
    buttonsStyling: false,
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-light',
      popup: 'bg-body',
    },
  })
}

export const showWarningDialog = (message: string, confirmText: string) => {
  return Swal.fire({
    text: message,
    icon: 'warning',
    buttonsStyling: false,
    confirmButtonText: confirmText,
    customClass: {
      confirmButton: 'btn btn-primary',
      popup: 'bg-body',
    },
  })
}

export const showDeleteDialog = (message: string, confirmText: string, cancelText: string) => {
  return Swal.fire({
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    reverseButtons: false,
    buttonsStyling: false,
    customClass: {
      confirmButton: 'btn btn-danger',
      cancelButton: 'btn btn-light',
      popup: 'bg-body',
    },
  })
}
