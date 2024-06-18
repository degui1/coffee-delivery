export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_AMOUNT = 'INCREMENT_ITEM_AMOUNT',
  DECREMENT_ITEM_AMOUNT = 'DECREMENT_ITEM_AMOUNT',
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

export interface Order {
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

export function CartReducer(state: CartState, action: CartActions): CartState {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM: {
      const itemAlreadyExists = state.cart.findIndex(
        (item) => item.id === action.payload.item.id,
      )

      if (itemAlreadyExists) {
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

      if (hasSelectedItem) {
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

      if (itemToIncrement) {
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

      if (itemToDecrement) {
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

    default:
      return state
  }
}
