import styled from '@emotion/styled'

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5vh;
  width: 768px;
  margin: 0 auto;
  padding: 5vh 0 10vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 5vh 3vw;
  }
`

export { PostListWrapper }
