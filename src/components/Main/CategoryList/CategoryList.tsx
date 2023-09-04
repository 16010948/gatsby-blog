import React, { FunctionComponent } from 'react'
import * as Styled from './styled'
import { CategoryListProps } from '@types/CategoryItem.types'

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <Styled.CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <Styled.CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </Styled.CategoryItem>
      ))}
    </Styled.CategoryListWrapper>
  )
}

export default CategoryList
