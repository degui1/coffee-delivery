import { TextInput } from '../../../../components/Form/TextField'
import { useForm } from 'react-hook-form'

export function OrderFormFields() {
  const { register } = useForm()
  return (
    <>
      <TextInput
        placeholder="CEP"
        type="number"
        containerProps={{ style: { gridArea: 'cep' } }}
        error={new Error('Test')}
        {...register('cep', { valueAsNumber: true })}
      />

      <TextInput
        placeholder="Rua"
        containerProps={{ style: { gridArea: 'street' } }}
        error={new Error('Test')}
        {...register('street')}
      />

      <TextInput
        placeholder="Número"
        containerProps={{ style: { gridArea: 'number' } }}
        error={new Error('Test')}
        {...register('number')}
      />

      <TextInput
        placeholder="Complemento"
        optional
        containerProps={{ style: { gridArea: 'fullAddress' } }}
        error={new Error('Test')}
        {...register('fullAddress')}
      />

      <TextInput
        placeholder="Bairro"
        containerProps={{ style: { gridArea: 'neighborhood' } }}
        error={new Error('Test')}
        {...register('neighborhood')}
      />

      <TextInput
        placeholder="Cidade"
        containerProps={{ style: { gridArea: 'city' } }}
        error={new Error('Test')}
        {...register('city')}
      />

      <TextInput
        placeholder="UF"
        maxLength={2}
        containerProps={{ style: { gridArea: 'state' } }}
        error={new Error('test')}
        {...register('state')}
      />
    </>
  )
}
