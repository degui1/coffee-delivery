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
`
