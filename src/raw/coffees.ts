import americano from '../assets/coffees/americano.png'
import arabe from '../assets/coffees/arabe.png'
import cafe_com_leite from '../assets/coffees/cafe_com_leite.png'
import cafe_gelado from '../assets/coffees/cafe_gelado.png'
import capuccino from '../assets/coffees/capuccino.png'
import chocolate_quente from '../assets/coffees/chocolate_quente.png'
import cubano from '../assets/coffees/cubano.png'
import expresso from '../assets/coffees/expresso.png'
import expresso_cremoso from '../assets/coffees/expresso_cremoso.png'
import havaiano from '../assets/coffees/havaiano.png'
import irlandes from '../assets/coffees/irlandes.png'
import latte from '../assets/coffees/latte.png'
import macchiato from '../assets/coffees/macchiato.png'
import mochaccino from '../assets/coffees/mochaccino.png'

export const Coffees = [
  { 
    imageSrc: expresso,
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  { 
    imageSrc: americano,
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
  { 
    imageSrc: expresso_cremoso,
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
  },
  { 
    imageSrc: cafe_gelado,
    tags: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
  },
  { 
    imageSrc: cafe_com_leite,
    tags: ['Tradicional', 'Com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
  },
  { 
    imageSrc: latte,
    tags: ['Tradicional', 'Com leite'],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
  },
  { 
    imageSrc: capuccino,
    tags: ['Tradicional', 'Com leite'],
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
  },
  { 
    imageSrc: macchiato,
    tags: ['Tradicional', 'Com leite'],
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  { 
    imageSrc: mochaccino,
    tags: ['Tradicional', 'Com leite'],
    title: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
  },
  { 
    imageSrc: chocolate_quente,
    tags: ['Tradicional', 'Com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
  },
  { 
    imageSrc: cubano,
    tags: ['Tradicional', 'Alcoólico', 'Gelado'],
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  { 
    imageSrc: havaiano,
    tags: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
  },
  { 
    imageSrc: arabe,
    tags: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
  },
  { 
    imageSrc: irlandes,
    tags: ['Tradicional', 'Alcoólico'],
    title: 'Irlândes',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
  },
]