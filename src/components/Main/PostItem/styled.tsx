import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
`

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.6vh;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 0.3vh;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.3rem;
  font-weight: 700;
`

const Date = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.7;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1vh;
  margin: 1vh -0.9vw;
`

const CategoryItem = styled.div`
  margin: 0.25vh 0.9vw;
  padding: 0.3vh 0.9vw;
  border-radius: 3px;
  background: black;
  font-size: 0.9rem;
  font-weight: 700;
  color: white;
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

export {
  PostItemWrapper,
  ThumbnailImage,
  PostItemContent,
  Title,
  Date,
  Category,
  CategoryItem,
  Summary,
}
