import CoffeeDeliveryImage from '../../../../assets/Coffee_delivery_cup_and_coffee.png'
import { HeroSection, Title, Subtitle, Text } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Hero() {
  return (
    <HeroSection>
      <div className="content">
        <header className="header">
          <Title>Find the perfect coffee for any time of the day</Title>
          <Subtitle>
            With Coffee Delivery, you receive your coffee wherever you are, at
            any time
          </Subtitle>
        </header>

        <ul className="highlights">
          <li className="highlights__item">
            <i>
              <ShoppingCart weight="fill" size={16} />
            </i>
            <Text>Simple and secure purchase</Text>
          </li>
          <li className="highlights__item">
            <i>
              <Package weight="fill" size={16} />
            </i>
            <Text>Packaging keeps the coffee intact</Text>
          </li>
          <li className="highlights__item">
            <i>
              <Timer weight="fill" size={16} />
            </i>
            <Text>Fast and tracked delivery</Text>
          </li>
          <li className="highlights__item">
            <i>
              <Coffee weight="fill" size={16} />
            </i>
            <Text>The coffee arrives fresh for you</Text>
          </li>
        </ul>
      </div>

      <img
        className="hero__image"
        src={CoffeeDeliveryImage}
        alt="Coffe Delivery printed on coffee cup"
      />
    </HeroSection>
  )
}
