import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import {
  ListActionsContainer,
  ListInfo,
  ListItem,
  RemoveListItemButton,
} from './styles'

export function OrderListItem() {
  return (
    <ListItem>
      <ListInfo>
        <img src={latteCoffeeImg} alt="" />
        <div>
          <span>Expresso Tradicional</span>
          <ListActionsContainer>
            <Counter />
            <RemoveListItemButton>
              <Trash size={16} /> <span>Remover</span>
            </RemoveListItemButton>
          </ListActionsContainer>
        </div>
      </ListInfo>

      <span>R$ 9,90</span>
    </ListItem>
  )
}
