import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  height: 2.5rem;

  margin: 2rem 1.25em;
  max-width: 1160px;
`

export const ActionContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    border: none;
    height: 2.375rem;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    cursor: pointer;
  }

  a {
    border: none;
    height: 2.375rem;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    &[aria-disabled='true'] {
      pointer-events: none;
    }

    position: relative;
  }

  span {
    ${mixins.fonts.textS};
    font-weight: bold;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['yellow-dark']};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(50%, -50%);
  }
`
