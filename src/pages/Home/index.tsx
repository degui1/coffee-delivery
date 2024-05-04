import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import FeedImg from '../../assets/FeedImg.svg'
import { Feed, HomeContainer, Info, SectionContainer } from './styles'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()

  console.log(theme)

  return (
    <HomeContainer>
      <Feed>
        <SectionContainer>
          <article className="HomeArticleSection">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
          </article>

          <Info>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme['yellow-dark'] }}
              />

              <span>Compra simple e segura</span>
            </div>

            <div>
              <Package
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme['base-text'] }}
              />

              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme.yellow }}
              />

              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme.purple }}
              />

              <span>O café chega frequinho até você</span>
            </div>
          </Info>
        </SectionContainer>
        <img src={FeedImg} alt="" className="feedImage" />
      </Feed>
    </HomeContainer>
  )
}
