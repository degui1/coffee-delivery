import { ReactNode } from 'react'
import { PillContainer } from './styles'

interface IPillProps {
  children: ReactNode
}

export function Pill({ children }: IPillProps) {
  return <PillContainer>{children}</PillContainer>
}
