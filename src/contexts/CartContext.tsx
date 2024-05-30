import { createContext } from 'react'

interface ICartContext {}

export const CartContext = createContext({} as ICartContext)

interface ICartProvider {
  children: React.ReactNode
}

export function CartProvider({ children }: ICartProvider) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}
