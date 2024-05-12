import styled from 'styled-components'

import { mixins } from '../../../../styles/mixins'

export const CardCoffee = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  height: 310px;
  width: 256px;

  padding: 1.25rem 1.5rem;

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
