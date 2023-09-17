import React, { FunctionComponent } from 'react'
import * as Styled from './styled'
import GlobalStyle from '@components/Common/GlobalStyle'

const NotFoundPage: FunctionComponent = function () {
  return (
    <Styled.NotFoundPageWrapper>
      <GlobalStyle />
      <Styled.NotFoundText>404</Styled.NotFoundText>
      <Styled.NotFoundDescription>
        찾을 수 없는 페이지입니다. <br />
        다른 콘텐츠를 보러 가보시겠어요?
      </Styled.NotFoundDescription>
      <Styled.GoToMainButton to="/">메인으로</Styled.GoToMainButton>
    </Styled.NotFoundPageWrapper>
  )
}

export default NotFoundPage
