import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const DeliveryContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1160px;
  width: 100%;
  height: calc(70vh - 6.5rem);

  justify-content: center;

  gap: 2.5rem;

  section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    gap: 6.5rem;
  }
`

export const DeliveryHeader = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;

  h1 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme['yellow-dark']};
  }

  > p {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const DeliveryInfoContainer = styled.div`
  border: 1px solid ${({ theme }) => theme['yellow-dark']};

  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.background};
      padding: 8px;
      border-radius: 999px;
    }

    > span {
      span {
        ${mixins.fonts.textMBold}
      }

      p {
        ${mixins.fonts.textMBold}
      }
    }
  }
`
