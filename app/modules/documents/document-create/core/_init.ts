import { uid } from "uid"
import { CodeDocument, FormData, FormItem, ModuleDocument } from "../../core/models"
import { Dispatch, SetStateAction } from "react"

export type DocumentContextProps = {
    code?: CodeDocument
    type?: ModuleDocument
    title?: string
    setTitle: Dispatch<SetStateAction<string | undefined>>
}


const initialView: DocumentContextProps = {
    setTitle: () => { },
}


const initialFormData: FormData = { date: new Date().toISOString().substring(0, 10) }

const initialItems: FormItem[] = [
    {
        id: uid(),
        product: undefined,
        quantity: 1,
        description: '',
        discount: 0.0,
        price: 0.0,
        tax: 0.0,
    },
]


export { initialFormData, initialItems, initialView }
