import CoffeeDeliveryImage from '../../assets/Coffee_delivery_cup_and_coffee.png'
import { IntroSection, Title, Subtitle, Text } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Intro() {
  return (
    <IntroSection>
      <div className='content'>
        <header className='header'>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>
        </header>

        <ul className='highlights'>
          <li className="highlights__item">
            <i><ShoppingCart weight="fill" size={16}/></i>
            <Text>Compra simples e segura</Text>
          </li>
          <li className="highlights__item">
            <i><Package weight="fill" size={16}/></i>
            <Text>Embalagem mantém o café intacto</Text>
          </li>
          <li className="highlights__item">
            <i><Timer weight="fill" size={16} /></i>
            <Text>Entrega rápida e rastreada</Text>
          </li>
          <li className="highlights__item">
            <i><Coffee weight="fill" size={16} /></i>
            <Text>O café chega fresquinho até você</Text>
          </li>
        </ul>
      </div>

      <img className='hero__image' src={ CoffeeDeliveryImage } alt="Coffe Delivery printed on coffee cup" />
    </ IntroSection>
  )
}