import { Hero } from './Components/Hero'
import { Coffees } from '../../mock/coffees'
import { ProductsContainer, ProductList } from './styles'
import { ProductCard } from './Components/ProductCard'

export function Products() {
  return (
    <ProductsContainer>
      <Hero />

      <section>
        <h1 className="TitleL">Our Coffess</h1>

        <ProductList>
          {Coffees.map((coffee) => {
            return <ProductCard key={coffee.id} coffee={coffee} />
          })}
        </ProductList>
      </section>
    </ProductsContainer>
  )
}
