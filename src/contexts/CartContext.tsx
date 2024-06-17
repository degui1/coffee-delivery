import { createContext, useReducer } from 'react'
import { CartActions, CartReducer } from '../reducers/Cart/CartReducer'

export const CartContext = createContext({} as ICartContext)

interface ICartProvider {
  children: React.ReactNode
}

export function CartProvider({ children }: ICartProvider) {
  const [coffees, dispatchCoffees] = useReducer(CartReducer, [])
  return (
    <CartContext.Provider value={{ coffees, dispatchCoffees }}>
      {children}
    </CartContext.Provider>
  )
}
