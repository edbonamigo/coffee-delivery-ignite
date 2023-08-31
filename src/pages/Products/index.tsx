import { Hero } from './Components/Hero'
import { TitleL } from '../../styles/themes/typography'
import { Coffees } from '../../mock/coffees'
import { ProductsContainer, ProductList } from './styles'
import { Product } from './Components/Product'

export function Products() {
  return (
    <ProductsContainer>
      <Hero />
      <section>
        <TitleL className="TitleL">Our Coffess</TitleL>

        <ProductList>
          {Coffees.map((coffee) => {
            return <Product key={coffee.id} coffee={coffee} />
          })}
        </ProductList>
      </section>
    </ProductsContainer>
  )
}
