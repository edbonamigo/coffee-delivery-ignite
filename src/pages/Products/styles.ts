import styled from 'styled-components'

export const ProductsContainer = styled.main`
  padding: 10rem 0 15rem;

  .TitleL {
    margin-bottom: 3.2rem;
  }
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 4rem;
  flex-wrap: wrap;
`
