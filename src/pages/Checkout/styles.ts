import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CheckoutContainer = styled.div`
  display: flex;
  max-width: 1160px;
  width: 100%;
  gap: 2rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

const baseCard = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
`

export const FormContainer = styled(baseCard)``

export const PaymentMethodContainer = styled(baseCard)``

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
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

export const FormFieldsContainer = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`

export const OrderContainer = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

export const OrderListContainer = styled.div``

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

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const AmountValue = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Value = styled(AmountValue)`
  ${mixins.fonts.textS}
`

export const Total = styled(AmountValue)`
  ${mixins.fonts.textLBold}
`

export const OrderButton = styled.button`
  width: 100%;
  border-radius: 6px;
  border: none;
  text-transform: uppercase;

  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  padding: 0.75rem;
  margin-top: 1.5rem;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
