import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { CategoryItemProps, GatsbyLinkProps } from './types'

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 10vh auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5vh;
    padding: 0 3vw;
  }
`

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 3vw;
  padding: 0.5vh 0;
  font-size: 1.1rem;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export { CategoryListWrapper, CategoryItem }
