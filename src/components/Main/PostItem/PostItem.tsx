import React, { FunctionComponent } from 'react'
import * as Styled from './styled'
import { PostItemProps } from './types'

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
}) {
  return (
    <Styled.PostItemWrapper to={link}>
      <Styled.ThumbnailImage src={thumbnail} alt="Post Item Image" />
      <Styled.PostItemContent>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Date>{date}</Styled.Date>
        <Styled.Category>
          {categories.map(category => (
            <Styled.CategoryItem key={category}>{category}</Styled.CategoryItem>
          ))}
        </Styled.Category>
        <Styled.Summary>{summary}</Styled.Summary>
      </Styled.PostItemContent>
    </Styled.PostItemWrapper>
  )
}

export default PostItem
