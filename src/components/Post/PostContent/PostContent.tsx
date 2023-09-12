import React, { FunctionComponent } from 'react'
import * as Styled from './styled'

interface PostContentProps {
  html: string
}

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <Styled.MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
