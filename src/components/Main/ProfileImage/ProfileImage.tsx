import React, { FunctionComponent } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import * as Styled from './styled'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <Styled.ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage
