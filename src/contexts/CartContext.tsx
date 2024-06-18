import { createContext, useReducer } from 'react'
import {
  CartActions,
  CartReducer,
  CartState,
} from '../reducers/Cart/CartReducer'

interface ICartContext {
  cartState: CartState
  dispatchCartState: React.Dispatch<CartActions>
}

export const CartContext = createContext({} as ICartContext)

interface ICartProvider {
  children: React.ReactNode
}

export function CartProvider({ children }: ICartProvider) {
  const [cartState, dispatchCartState] = useReducer(CartReducer, {
    cart: [],
    orders: [],
  })

  return (
    <CartContext.Provider value={{ cartState, dispatchCartState }}>
      {children}
    </CartContext.Provider>
  )
}
