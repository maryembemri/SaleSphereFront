import { CaisseForm } from "../../core/_models"
import * as Yup from 'yup'


const fieldLabels = {
    startDate: 'Start Date',
    dueDate: 'Due Date',
    project: 'Project',
}

const createSchemas =
    Yup.object({
        productNumber: Yup.number().required().min(1, 'Sélectionnez au moins un product pour continuer'),
    })


const initValues: CaisseForm = {
    reference: "",
    startDate: "",
    dueDate: "",
    project: "acune",
    totalQuantity: 0,
    productNumber: 0,
    totalCost: 0
}






export { initValues, createSchemas }
