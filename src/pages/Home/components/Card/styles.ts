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

  align-items: center;

  text-align: center;

  gap: 1rem;

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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
      background-color: ${({ theme }) => theme['purple-dark']};
      color: ${({ theme }) => theme.background};
      padding: 8px;
      border-radius: 6px;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.purple};
      }
    }
  }
`
export const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 0.25rem;
`
