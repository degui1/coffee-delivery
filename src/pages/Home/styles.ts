import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  height: calc(100vh - 6.5rem);
  padding-top: 5.875rem;
  max-width: 1160px;
`

export const Menu = styled.div`
  padding: 2rem 0;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  height: 310px;
  width: 256px;

  padding: 20px 24px;

  justify-content: space-between;
  align-items: center;

  text-align: center;

  .pill {
    background-color: ${(props) => props.theme['yellow-light']};
    ${mixins.fonts.tag}
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
    padding: 4px 2px;
    border-radius: 100px;
    text-align: center;
    width: 80px;
  }

  h3 {
    ${mixins.fonts.titleS}
  }

  p {
    ${mixins.fonts.textS}
  }

  img {
    width: 100px;
    margin-top: calc(0px - 2rem - 8px);
  }
`

export const BuySection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  justify-content: space-between;

  .cardPrice {
    ${mixins.fonts.titleM}
  }

  button {
    border: none;

    svg {
      padding: 8px;
      border-radius: 6px;
    }
  }
`

export const Counter = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  background-color: ${(props) => props.theme['base-button']};

  width: 4.5rem;
  border-radius: 6px;

  .counterNumber {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-title']};
  }
`
