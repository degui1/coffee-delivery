import { Minus, Plus } from 'phosphor-react'

import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <span>
        <Minus size={14} />
      </span>
      <span className="counterNumber">0</span>
      <span>
        <Plus size={14} />
      </span>
    </CounterContainer>
  )
}
