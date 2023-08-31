import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ProductCardContainer } from './styles'

interface Coffee {
  id: string
  imageSrc: string
  tags: string[]
  title: string
  description: string
  price: string
}

interface ProductCardProps {
  coffee: Coffee
}

export function ProductCard({ coffee }: ProductCardProps) {
  console.log(coffee)

  return (
    <ProductCardContainer>
      <img src={coffee.imageSrc} className="image" alt="" />
      <div className="tags">
        {coffee.tags.map((tag: string) => {
          return (
            <span className="Tag" key={tag}>
              {tag}
            </span>
          )
        })}
      </div>
      <h3 className="TitleS title">{coffee.title}</h3>
      <p className="TextS description">{coffee.description}</p>

      <footer>
        <div className="price">
          <p className="TextS">R$</p>
          <p className="TitleM">{coffee.price}</p>
        </div>

        <div className="quantity">
          <Minus size={14} />
          <p className="TextM">1</p>
          <Plus size={14} />
        </div>

        <button className="cartButton">
          <ShoppingCart weight="fill" size={22} />
        </button>
      </footer>
    </ProductCardContainer>
  )
}
