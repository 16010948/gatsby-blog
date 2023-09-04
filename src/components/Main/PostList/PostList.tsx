import React, { FunctionComponent } from 'react'
import PostItem from '@components/Main/PostItem'
import { PostListItemType, PostListProps } from '@types/PostItem.types'
import * as Styled from './styled'

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <Styled.PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </Styled.PostListWrapper>
  )
}

export default PostList
