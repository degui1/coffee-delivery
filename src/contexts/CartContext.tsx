import { createContext, useEffect, useReducer } from 'react'
import {
  CartActions,
  CartReducer,
  CartState,
} from '../reducers/Cart/CartReducer'
import { NavigateFunction, useNavigate } from 'react-router-dom'

interface ICartContext {
  cartState: CartState
  dispatchCartState: React.Dispatch<CartActions>
  navigate: NavigateFunction
}

export const CartContext = createContext({} as ICartContext)

interface ICartProvider {
  children: React.ReactNode
}

export function CartProvider({ children }: ICartProvider) {
  const navigate = useNavigate()
  const [cartState, dispatchCartState] = useReducer(
    CartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedCartState = localStorage.getItem(
        `@coffee-delivery:cart-state-1.0.0`,
      )

      if (storedCartState) {
        return JSON.parse(storedCartState)
      }

      return cartState
    },
  )

  useEffect(() => {
    if (cartState) {
      const stateJson = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJson)
    }
  }, [cartState])

  return (
    <CartContext.Provider value={{ cartState, dispatchCartState, navigate }}>
      {children}
    </CartContext.Provider>
  )
}
