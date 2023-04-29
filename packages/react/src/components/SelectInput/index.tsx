import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { Select, SelectInputContainer } from './styles'

export interface SelectInputProps extends ComponentProps<typeof Select> {
  children: React.ReactNode
}

export const SelectInput = forwardRef<
  ElementRef<typeof Select>,
  SelectInputProps
>(({ children, ...props }: SelectInputProps, ref) => {
  return (
    <SelectInputContainer>
      <Select ref={ref} {...props}>
        {children}
      </Select>
    </SelectInputContainer>
  )
})

SelectInput.displayName = 'SelectInput'
