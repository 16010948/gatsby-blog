import React, { FunctionComponent } from 'react'
import { Global } from '@emotion/react'
import { defaultStyle } from './styled'

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
