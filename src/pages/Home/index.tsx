import { Coffee } from '../../reducers/CartReducer'
import { Card } from './components/Card'
import { Feed } from './components/Feed'
import { CardsContainer, HomeContainer, Menu } from './styles'

const Coffees: Coffee[] = [
  {
    id: '57349',
    name: 'Café com Leite',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: '',
    amount: 0,
  },
  {
    id: '32180',
    name: 'Latte',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: '',
    amount: 0,
  },
  {
    id: '76090',
    name: 'Capuccino',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: '',
    amount: 0,
  },
  {
    id: '34278',
    name: 'Macchiato',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: '',
    amount: 0,
  },
  {
    id: '43625',
    name: 'Mocaccino',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: '',
    amount: 0,
  },
  {
    id: '47382',
    name: 'Chocolate Quente',
    price: 9.9,
    tags: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: '',
    amount: 0,
  },
  {
    id: '22548',
    name: 'Cubano',
    price: 9.9,
    tags: ['especial', 'alcoólico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: '',
    amount: 0,
  },
  {
    id: '43978',
    name: 'Havaiano',
    price: 9.9,
    tags: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: '',
    amount: 0,
  },
  {
    id: '89761',
    name: 'Árabe',
    price: 9.9,
    tags: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: '',
    amount: 0,
  },
  {
    id: '06857',
    name: 'Irlandês',
    price: 9.9,
    tags: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantily',
    image: '',
    amount: 0,
  },
]

export function Home() {
  return (
    <HomeContainer>
      <Feed />
      <Menu>
        <h1>Nossos Cafés</h1>
        <CardsContainer>
          {Coffees.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />
          })}
        </CardsContainer>
      </Menu>
    </HomeContainer>
  )
}
