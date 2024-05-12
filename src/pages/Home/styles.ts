import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1160px;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  h1 {
    margin-bottom: 3.375rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2.5rem;
`
