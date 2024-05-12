import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CheckoutContainer = styled.div`
  display: flex;
  max-width: 1160px;
  justify-content: space-between;

  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

const baseCard = styled.div`
  max-width: 640px;
  background-color: ${({ theme }) => theme['base-card']};
  display: flex;
  flex-flow: column;
  padding: 2.5rem;
  border-radius: 6px;
`

export const FormContainer = styled(baseCard)``

export const PaymentMethodContainer = styled(baseCard)`
  gap: 2rem;
  .paymentContainer {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
`

export const InformSection = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    /* justify-content: space-between; */

    > span {
      ${mixins.fonts.textM}
      color: ${({ theme }) => theme['base-subtitle']};
    }

    > p {
      ${mixins.fonts.textS}
    }
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }
`
