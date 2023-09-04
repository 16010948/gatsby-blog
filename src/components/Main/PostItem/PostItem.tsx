import React, { FunctionComponent } from 'react'
import * as Styled from './styled'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <Styled.PostItemWrapper to={link}>
      <Styled.ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
      <Styled.PostItemContent>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Date>{date}</Styled.Date>
        <Styled.Category>
          {categories.map((category: string) => (
            <Styled.CategoryItem key={category}>{category}</Styled.CategoryItem>
          ))}
        </Styled.Category>
        <Styled.Summary>{summary}</Styled.Summary>
      </Styled.PostItemContent>
    </Styled.PostItemWrapper>
  )
}

export default PostItem
