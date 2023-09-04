import React, { FunctionComponent } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import * as Styled from './styled'
import ProfileImage from '@components/Main/ProfileImage'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Styled.Background>
      <Styled.Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <Styled.SubTitle>Nice to Meet You,</Styled.SubTitle>
          <Styled.Title>I'm Junior Frontend Developer.</Styled.Title>
        </div>
      </Styled.Wrapper>
    </Styled.Background>
  )
}

export default Introduction
