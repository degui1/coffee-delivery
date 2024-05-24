import { Bank, CreditCard, Money } from 'phosphor-react'
import { Radio } from '../../../../components/Form/Radio'
import { useForm } from 'react-hook-form'

export function PaymentMethods() {
  const { register } = useForm()
  return (
    <>
      <Radio isSelected={true} {...register('paymentMethod')} value="credit">
        <CreditCard size={16} />
        <span>Cartão de crédito</span>
      </Radio>
      <Radio isSelected={false} {...register('paymentMethod')} value="credit">
        <Bank size={16} />
        <span>Cartão de débito</span>
      </Radio>
      <Radio isSelected={false} {...register('paymentMethod')} value="credit">
        <Money size={16} />
        <span>Dinheiro</span>
      </Radio>
    </>
  )
}
