import { Minus, Plus } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { CounterContainer } from './styles'

export function Counter() {
  const theme = useTheme()
  return (
    <CounterContainer>
      <span>
        <Minus size={14} color={theme.purple} />
      </span>
      <span className="counterNumber">0</span>
      <span>
        <Plus size={14} color={theme.purple} />
      </span>
    </CounterContainer>
  )
}
