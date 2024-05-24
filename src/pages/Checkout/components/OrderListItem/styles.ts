import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
`

export const ListInfo = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`

export const ListActionsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
`

export const RemoveListItemButton = styled.button`
  display: flex;
  gap: 8px;

  padding: 6px 8px;
  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  > svg {
    color: ${({ theme }) => theme.purple};
  }

  > span {
    ${mixins.fonts.buttonM};
    text-transform: uppercase;
    color: ${({ theme }) => theme['base-text']};
  }
`
