import styled from 'styled-components'
import { mixins } from '../../../../../../styles/mixins'

export const PillContainer = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  ${mixins.fonts.tag}
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};
  padding: 4px 8px;
  border-radius: 100px;
  text-align: center;

  display: flex;
  align-items: center;
`
