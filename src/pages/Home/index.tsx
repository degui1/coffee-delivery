import FeedImg from '../../assets/FeedImg.svg'
import { HomeContainer, SectionContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <SectionContainer>
        <article className="HomeArticleSection">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </article>

        <ul>
          <li>Compra simples e segura</li>
          <li>Entrega rápida e rastreada</li>
          <li>Embalagem mantém o café intacto</li>
          <li>O café chega fresquinho até você</li>
        </ul>
      </SectionContainer>
      <img src={FeedImg} alt="" className="feedImage" />
    </HomeContainer>
  )
}
