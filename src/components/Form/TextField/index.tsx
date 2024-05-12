import { HtmlHTMLAttributes } from 'react'

type ITextFieldProps = HtmlHTMLAttributes<HTMLInputElement> & {}

export function TextField({ ...refs }: ITextFieldProps) {
  return (
    <Container>
      <input {...refs} />
    </Container>
  )
}
