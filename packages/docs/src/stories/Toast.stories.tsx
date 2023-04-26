import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@danielcorrea-ui/react'

export default {
  title: 'Interactive/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Button
            size={'md'}
            onClick={() => {
              return (
                <>
                  <Toast
                    title="sucesso"
                    description="Demostração do toast"
                    duration={3000}
                    size="sm"
                    titleButton="OK"
                    typeToast="success"
                    linkButton="#"
                  />
                </>
              )
            }}
          >
            Open Toast
          </Button>

          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const success: StoryObj<ToastProps> = {
  args: {
    typeToast: 'success',
    size: 'sm',
  },
}

export const danger: StoryObj<ToastProps> = {
  args: {
    typeToast: 'danger',
    size: 'sm',
  },
}

export const warning: StoryObj<ToastProps> = {
  args: {
    typeToast: 'warning',
    size: 'sm',
  },
}

export const large: StoryObj<ToastProps> = {
  args: {
    typeToast: 'success',
    size: 'lg',
  },
}
