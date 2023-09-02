import React, { FunctionComponent } from 'react'
import * as Styled from './styled'
import ProfileImage from '@components/Main/ProfileImage'

const Introduction: FunctionComponent = function () {
  return (
    <Styled.Background>
      <Styled.Wrapper>
        <ProfileImage />

        <div>
          <Styled.SubTitle>Nice to Meet You,</Styled.SubTitle>
          <Styled.Title>I'm Junior Frontend Developer.</Styled.Title>
        </div>
      </Styled.Wrapper>
    </Styled.Background>
  )
}

export default Introduction
