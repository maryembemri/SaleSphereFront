export type DocumentCodeStatus = 'NEW_DOC' | 'CAN_DOC' | 'VAL_DOC' | 'PAY_DOC'


export type Status = {
    id: number,
    code: DocumentCodeStatus
    label: string
    category: string
    style: string
}
