import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 3vh;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

export { ProfileImageWrapper }
