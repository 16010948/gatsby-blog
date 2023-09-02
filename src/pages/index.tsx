import React, { FunctionComponent } from 'react'

import GlobalStyle from '@components/Common/GlobalStyle'
import Introduction from '@components/Main/Introduction'
import CategoryList from '@components/Main/CategoryList'
import PostList from '@components/Main/PostList'
import Footer from '@components/Common/Footer'

import * as Styled from './styled'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const IndexPage: FunctionComponent = function () {
  return (
    <Styled.Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Styled.Container>
  )
}

export default IndexPage
