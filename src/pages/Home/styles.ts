import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  height: calc(100vh - 6.5rem);
  padding-top: 5.875rem;
  max-width: 1160px;
`

export const Feed = styled.section`
  display: flex;
  align-items: center;
  gap: 3.5rem;
`

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & h1 {
      ${mixins.fonts.titleXL}
    }

    & h3 {
      ${mixins.fonts.textL}
      color: ${(props) => props.theme.subtitle};
    }
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`
