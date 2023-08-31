import { v4 as uuidv4 } from 'uuid'
import americano from '../assets/coffees/americano.png'
import arabe from '../assets/coffees/arabe.png'
import cafeComLeite from '../assets/coffees/cafe_com_leite.png'
import cafeGelado from '../assets/coffees/cafe_gelado.png'
import capuccino from '../assets/coffees/capuccino.png'
import chocolateQuente from '../assets/coffees/chocolate_quente.png'
import cubano from '../assets/coffees/cubano.png'
import expresso from '../assets/coffees/expresso.png'
import expressoCremoso from '../assets/coffees/expresso_cremoso.png'
import havaiano from '../assets/coffees/havaiano.png'
import irlandes from '../assets/coffees/irlandes.png'
import latte from '../assets/coffees/latte.png'
import macchiato from '../assets/coffees/macchiato.png'
import mochaccino from '../assets/coffees/mochaccino.png'

export const Coffees = [
  {
    id: uuidv4(),
    imageSrc: expresso,
    tags: ['Traditional'],
    title: 'Traditional Espresso',
    description: 'The classic coffee made with hot water and ground beans',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: americano,
    tags: ['Traditional'],
    title: 'American Espresso',
    description: 'Diluted espresso, less intense than the traditional one',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: expressoCremoso,
    tags: ['Traditional'],
    title: 'Creamy Espresso',
    description: 'Traditional espresso coffee with creamy foam',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: cafeGelado,
    tags: ['Traditional', 'Iced'],
    title: 'Iced Espresso',
    description: 'Drink prepared with espresso and ice cubes',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: cafeComLeite,
    tags: ['Traditional', 'With milk'],
    title: 'Coffee with Milk',
    description: 'Half and half of traditional espresso with steamed milk',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: latte,
    tags: ['Traditional', 'With milk'],
    title: 'Latte',
    description:
      'A shot of espresso with double the amount of milk and creamy foam',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: capuccino,
    tags: ['Traditional', 'With milk'],
    title: 'Cappuccino',
    description:
      'Cinnamon-flavored drink made with equal parts of coffee, milk, and foam',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: macchiato,
    tags: ['Traditional', 'With milk'],
    title: 'Macchiato',
    description: 'Espresso coffee mixed with a little hot milk and foam',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: mochaccino,
    tags: ['Traditional', 'With milk'],
    title: 'Mochaccino',
    description:
      'Espresso coffee with chocolate syrup, a little milk, and foam',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: chocolateQuente,
    tags: ['Traditional', 'With milk'],
    title: 'Hot Chocolate',
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: cubano,
    tags: ['Traditional', 'Alcoholic', 'Iced'],
    title: 'Cubano',
    description: 'Cold drink made with espresso coffee, rum, cream, and mint',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: havaiano,
    tags: ['Special'],
    title: 'Hawaiian',
    description: 'Sweetened drink prepared with coffee and coconut milk',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: arabe,
    tags: ['Special'],
    title: 'Arabic',
    description: 'Drink prepared with Arabian coffee beans and spices',
    price: '9.90',
  },
  {
    id: uuidv4(),
    imageSrc: irlandes,
    tags: ['Traditional', 'Alcoholic'],
    title: 'Irish',
    description:
      'Drink made with coffee, Irish whiskey, sugar, and whipped cream',
    price: '9.90',
  },
]
