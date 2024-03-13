import React from 'react'
import ReactSVG from 'react-inlinesvg'
import {toAbsoluteUrl} from '../AssetHelpers'
type Props = {
  className?: string
  path: string
  svgClassName?: string
  style?: any
}

const SVG: React.FC<Props> = ({className = '', path, svgClassName = 'mh-50px', style}) => {
  return (
    <span style={style} className={`svg-icon ${className}`}>
      <ReactSVG src={toAbsoluteUrl(path)} className={svgClassName} />
    </span>
  )
}

export {SVG}
