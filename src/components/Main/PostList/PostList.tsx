import React, { FunctionComponent } from 'react'
import PostItem from '@components/Main/PostItem'
import * as Styled from './styled'

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    '<https://ji5485.github.io/static/e4f34c558ae8e8235ff53b0311085796/4d854/javascript-core-concept-summary-function-1.webp>',
  link: '<https://www.google.co.kr/>',
}

const PostList: FunctionComponent = function () {
  return (
    <Styled.PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </Styled.PostListWrapper>
  )
}

export default PostList
