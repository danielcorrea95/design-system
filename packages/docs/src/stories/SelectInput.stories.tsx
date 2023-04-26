import type { Meta, StoryObj } from '@storybook/react'
import { Box, SelectInput, SelectInputProps } from '@danielcorrea-ui/react'

export default {
  title: 'Form/Select Input',
  component: SelectInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <SelectInput>
            <option>selecione um valor</option>
          </SelectInput>
        </Box>
      )
    },
  ],
} as Meta<SelectInputProps>

export const Primary: StoryObj<SelectInputProps> = {
  args: {},
}

export const Disabled: StoryObj<SelectInputProps> = {
  args: {
    disabled: true,
  },
}
