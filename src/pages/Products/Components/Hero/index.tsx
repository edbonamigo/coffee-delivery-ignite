import CoffeeDeliveryImage from '../../../../assets/Coffee_delivery_cup_and_coffee.png'
import { HeroSection } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Hero() {
  return (
    <HeroSection>
      <div className="content">
        <header className="header">
          <h1 className="TitleXL">
            Find the perfect coffee for any time of the day
          </h1>
          <p className="TextL">
            With Coffee Delivery, you receive your coffee wherever you are, at
            any time
          </p>
        </header>

        <ul className="highlights">
          <li className="highlights__item">
            <i>
              <ShoppingCart weight="fill" size={16} />
            </i>
            <p className="TextM">Simple and secure purchase</p>
          </li>
          <li className="highlights__item">
            <i>
              <Package weight="fill" size={16} />
            </i>
            <p className="TextM">Packaging keeps the coffee intact</p>
          </li>
          <li className="highlights__item">
            <i>
              <Timer weight="fill" size={16} />
            </i>
            <p className="TextM">Fast and tracked delivery</p>
          </li>
          <li className="highlights__item">
            <i>
              <Coffee weight="fill" size={16} />
            </i>
            <p className="TextM">The coffee arrives fresh for you</p>
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
