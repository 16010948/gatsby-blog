import React, { FunctionComponent, ReactNode } from 'react'
import GlobalStyle from '@components/Common/GlobalStyle'
import Footer from '@components/Common/Footer'
import * as Styled from './styled';

type TemplateProps = {
  children: ReactNode
}

const Template: FunctionComponent<TemplateProps> = function ({ children }) {
  return (
    <Styled.Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Styled.Container>
  )
}

export default Template
