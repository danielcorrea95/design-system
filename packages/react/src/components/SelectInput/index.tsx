import React, { ComponentProps } from 'react'
import { Select, SelectInputContainer } from './styles'

export interface SelectInputProps extends ComponentProps<typeof Select> {
  children: React.ReactNode
}

export function SelectInput({ children, ...props }: SelectInputProps) {
  return (
    <SelectInputContainer>
      <Select {...props}>{children}</Select>
    </SelectInputContainer>
  )
}

SelectInput.displayName = 'SelectInput'
