import styled from 'styled-components'

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
  }
`
