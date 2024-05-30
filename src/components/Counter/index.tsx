import { Minus, Plus } from 'phosphor-react'

import { CounterContainer } from './styles'

interface ICounterProperties {
  amount: number
  onReduceAmount: () => void
  onIncreaseAmount: () => void
}

export function Counter({
  amount,
  onIncreaseAmount,
  onReduceAmount,
}: ICounterProperties) {
  return (
    <CounterContainer>
      <span onClick={onReduceAmount}>
        <Minus size={14} />
      </span>
      <span className="counterNumber">{amount}</span>
      <span onClick={onIncreaseAmount}>
        <Plus size={14} />
      </span>
    </CounterContainer>
  )
}
