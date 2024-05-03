import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.main`
  display: flex;
  height: calc(100vh - 6.5rem);

  align-items: center;

  max-width: 1160px;
`

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    ${mixins.fonts.titleXL}
  }

  h3 {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.subtitle};
  }
`
