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
    item: Item['id']
  }
}

type IncrementItemAction = {
  type: CartActionTypes.INCREMENT_ITEM_AMOUNT
  payload: {
    item: Item['id']
  }
}

type DecrementItemAction = {
  type: CartActionTypes.DECREMENT_ITEM_AMOUNT
  payload: {
    item: Item['id']
  }
}

export interface CartState {}

export type CartActions =
  | AddItemAction
  | RemoveItemAction
  | IncrementItemAction
  | DecrementItemAction

export function CartReducer(state: CartState[], action: CartActions) {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM: {
      return state
    }

    case CartActionTypes.REMOVE_ITEM: {
      return state
    }

    case CartActionTypes.INCREMENT_ITEM_AMOUNT: {
      return state
    }
    case CartActionTypes.DECREMENT_ITEM_AMOUNT: {
      return state
    }

    default:
      return state
  }
}
