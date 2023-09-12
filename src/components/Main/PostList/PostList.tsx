import React, { FunctionComponent, useMemo } from 'react'
import PostItem from '@components/Main/PostItem'
import { PostListItemType, PostListProps } from '@types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from '@hooks/useInfiniteScroll'
import * as Styled from './styled'

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <Styled.PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </Styled.PostListWrapper>
  )
}

export default PostList
