import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Container = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme['yellow-dark']};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme['base-button']};
  }

  input {
    color: ${({ theme }) => theme['base-text']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      outline: none;
    }
  }

  span {
    padding-right: 12px;
    color: ${({ theme }) => theme['base-label']};
    font-style: italic;
    ${mixins.fonts.textS}
  }
`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS}
  font-weight: 400;
  color: red;
`
