import React, {FC} from 'react'

interface AvatarProps {
  blankImg: string
  userAvatarImg: string
}

const Avatar: FC<AvatarProps> = ({blankImg, userAvatarImg}) => (
  <div className='card-body text-center'>
    <div
      className='image-input image-input-outline'
      data-image-input='true'
      style={{backgroundImage: `url('${blankImg}')`}}
    >
      {/* begin::Preview existing avatar */}
      <div
        className='image-input-wrapper w-150px h-150px'
        style={{backgroundImage: `url('${userAvatarImg}')`}}
      ></div>
    </div>
  </div>
)

export default Avatar
