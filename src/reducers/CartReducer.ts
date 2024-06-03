export enum CartActionTypes {
  ADD_COFFEE = 'ADD_NEW',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export type Coffee = {
  id: string
  name: string
  price: number
  tags: string[]
  description: string
  image: string
  amount: number
}

export type CartActions = {
  type: CartActionTypes
  payload: {
    coffee: Coffee
  }
}

function findCoffee(state: Coffee[], id: string): boolean {
  if (state.find((coffee) => coffee.id === id)) {
    return true
  }
  return false
}

function AddCoffee(state: Coffee[], coffeeOutOf: Coffee): Coffee[] {
  if (findCoffee(state, coffeeOutOf.id)) {
    return state.map((coffee) => {
      if (coffee.id === coffeeOutOf.id) {
        return { ...coffee, amount: coffee.amount + 1 }
      }
      return coffee
    })
  } else {
    return [...state, coffeeOutOf]
  }
}

function ReduceAmount(state: Coffee[], coffeeOutOf: Coffee): Coffee[] {
  return state.map((coffee) => {
    if (coffee.id === coffeeOutOf.id && coffeeOutOf.amount > 0) {
      return { ...coffee, amount: coffee.amount + 1 }
    }

    return coffee
  })
}

function RemoveCoffee(state: Coffee[], coffeeOutOf: Coffee): Coffee[] {
  return state.filter((coffee) => coffee.id !== coffeeOutOf.id)
}

export function CartReducer(state: Coffee[], action: CartActions) {
  switch (action.type) {
    case CartActionTypes.ADD_COFFEE: {
      return AddCoffee(state, action.payload.coffee)
    }

    case CartActionTypes.REMOVE_COFFEE: {
      if (action.payload.coffee.amount > 1) {
        return ReduceAmount(state, action.payload.coffee)
      } else {
        return RemoveCoffee(state, action.payload.coffee)
      }
    }

    default:
      return state
  }
}
