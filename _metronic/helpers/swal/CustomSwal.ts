import Swal from "sweetalert2"

export const Success = Swal.mixin({
    icon: 'success',
    showConfirmButton: true,
    buttonsStyling: false,
    customClass: {
        confirmButton: 'btn btn-success',
        popup: 'bg-body',
    },
})

export const Fail = Swal.mixin({
    icon: 'error',
    buttonsStyling: false,
    confirmButtonText: 'Ok, got it!',
    customClass: {
        confirmButton: 'btn btn-danger',
        popup: 'bg-body',
    },
})


