import {FC} from 'react'
import {Status} from '../../../../../../_metronic/helpers'

type Props = {
  state?: Status
}

const DocumentStateCell: FC<Props> = ({state}) => {
  return <span className={`badge badge-sm badge-light-${state?.style}`}>{state?.label}</span>
}

export {DocumentStateCell}
