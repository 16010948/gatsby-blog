import React, { FunctionComponent } from 'react'
import * as Styled from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  const goBackPage = () => window.history.back()

  return (
    <Styled.PostHeadInfoWrapper>
      <Styled.PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Styled.PrevPageIcon>
      <Styled.Title>{title}</Styled.Title>
      <Styled.PostData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </Styled.PostData>
    </Styled.PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
