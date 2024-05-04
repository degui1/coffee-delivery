import { Feed } from './components/Feed'
import { HomeContainer, Menu } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Feed />
      <Menu>
        <h1>Nossos Cafés</h1>
      </Menu>
    </HomeContainer>
  )
}
