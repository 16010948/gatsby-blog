import React, { FunctionComponent } from 'react'
import * as Styled from './styled'

const PROFILE_IMAGE_LINK =
  'https://user-images.githubusercontent.com/37282087/102565988-e19fbb00-4121-11eb-89bd-3a960bb7c50e.png'

const ProfileImage: FunctionComponent = function () {
  return (
    <Styled.ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
  )
}

export default ProfileImage
