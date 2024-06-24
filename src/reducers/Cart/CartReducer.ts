import { NavigateFunction } from 'react-router-dom'
import { OrderInfo } from '../../pages/Checkout'

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_AMOUNT = 'INCREMENT_ITEM_AMOUNT',
  DECREMENT_ITEM_AMOUNT = 'DECREMENT_ITEM_AMOUNT',
  CHECKOUT = 'CHECKOUT',
}

export interface Item {
  id: string
  amount: number
}

type AddItemAction = {
  type: CartActionTypes.ADD_ITEM
  payload: {
    item: Item
  }
}

type RemoveItemAction = {
  type: CartActionTypes.REMOVE_ITEM
  payload: {
    itemId: Item['id']
  }
}

type IncrementItemAction = {
  type: CartActionTypes.INCREMENT_ITEM_AMOUNT
  payload: {
    itemId: Item['id']
  }
}

type DecrementItemAction = {
  type: CartActionTypes.DECREMENT_ITEM_AMOUNT
  payload: {
    itemId: Item['id']
  }
}

type CheckoutAction = {
  type: CartActionTypes.CHECKOUT
  payload: {
    order: OrderInfo
    callbackNavigation: NavigateFunction
  }
}

export interface Order extends OrderInfo {
  id: number
  items: Item[]
}

export interface CartState {
  cart: Item[]
  orders: Order[]
}

export type CartActions =
  | AddItemAction
  | RemoveItemAction
  | IncrementItemAction
  | DecrementItemAction
  | CheckoutAction

export function CartReducer(state: CartState, action: CartActions): CartState {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM: {
      const itemAlreadyExists = state.cart.findIndex(
        (item) => item.id === action.payload.item.id,
      )

      if (itemAlreadyExists > -1) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload.item.id) {
              return {
                ...item,
                amount: action.payload.item.amount,
              }
            }

            return item
          }),
        }
      }

      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      }
    }

    case CartActionTypes.REMOVE_ITEM: {
      const hasSelectedItem = state.cart.findIndex(
        (item) => item.id === action.payload.itemId,
      )

      if (hasSelectedItem > -1) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.itemId),
        }
      }

      return state
    }

    case CartActionTypes.INCREMENT_ITEM_AMOUNT: {
      const itemToIncrement = state.cart.findIndex(
        (item) => item.id === action.payload.itemId,
      )

      if (itemToIncrement > -1) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload.itemId) {
              return {
                ...item,
                amount: item.amount + 1,
              }
            }

            return item
          }),
        }
      }

      return state
    }
    case CartActionTypes.DECREMENT_ITEM_AMOUNT: {
      const itemToDecrement = state.cart.findIndex(
        (item) => item.id === action.payload.itemId,
      )

      if (itemToDecrement > -1) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload.itemId && item.amount > 1) {
              return {
                ...item,
                amount: item.amount - 1,
              }
            }
            return item
          }),
        }
      }

      return state
    }

    case CartActionTypes.CHECKOUT: {
      const newOrder: Order = {
        id: new Date().getTime(),
        items: state.cart,
        ...action.payload.order,
      }

      action.payload.callbackNavigation(`/success/${newOrder.id}/success`)

      return {
        cart: [],
        orders: [...state.orders, newOrder],
      }
    }

    default:
      return state
  }
}
