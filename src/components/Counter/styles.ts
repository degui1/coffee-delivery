import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CounterContainer = styled.div`
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

  span {
    transition: all 0.2s;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.purple};
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme['purple-dark']};
      }
    }
  }
`
