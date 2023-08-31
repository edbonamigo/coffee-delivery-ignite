import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ProductCard } from './styles'
import {
  Tag,
  TextM,
  TextS,
  TitleM,
  TitleS,
} from '../../../../styles/themes/typography'

export function Product({ coffee }) {
  console.log(coffee)

  return (
    <ProductCard>
      <img src={coffee.imageSrc} className="image" alt="" />
      <div className="tags">
        {coffee.tags.map((tag: string) => {
          return <Tag key={tag}>{tag}</Tag>
        })}
      </div>
      <TitleS className="title">{coffee.title}</TitleS>
      <TextS className="description">{coffee.description}</TextS>

      <footer>
        <div className="price">
          <TextS>R$</TextS>
          <TitleM>{coffee.price}</TitleM>
        </div>

        <div className="quantity">
          <Plus size={14} />
          <TextM>1</TextM>
          <Minus size={14} />
        </div>

        <button className="cartButton">
          <ShoppingCart weight="fill" size={22} />
        </button>
      </footer>
    </ProductCard>
  )
}
