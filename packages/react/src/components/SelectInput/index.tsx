import { ComponentProps } from 'react'
import { Select, SelectInputContainer } from './styles'

export interface SelectInputProps extends ComponentProps<typeof Select> {
  options: {
    id: string
    text: string
  }[]
}

export function SelectInput({ options, ...props }: SelectInputProps) {
  return (
    <SelectInputContainer>
      <Select {...props}>
        {options?.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.text}
            </option>
          )
        })}
      </Select>
    </SelectInputContainer>
  )
}

SelectInput.displayName = 'SelectInput'
