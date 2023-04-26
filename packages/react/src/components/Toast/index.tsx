import * as RadixToast from '@radix-ui/react-toast'
import {
  Button,
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { useState } from 'react'

export interface ToastProps {
  title: string
  description: string
  titleButton: string
  linkButton: string
  duration: number
  typeToast: 'success' | 'warning' | 'danger'
  size: 'sm' | 'lg'
}

export function Toast({
  title,
  description,
  titleButton,
  linkButton,
  duration,
  typeToast,
  size,
}: ToastProps) {
  const [openToast, setOpenToast] = useState(true)

  window.setTimeout(() => {
    setOpenToast(false)
    location.assign(linkButton)
  }, duration)

  return (
    <>
      <RadixToast.Provider swipeDirection="right">
        <ToastRoot
          open={openToast}
          onOpenChange={setOpenToast}
          variant={typeToast}
        >
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription asChild>
            <p>{description}</p>
          </ToastDescription>
          <ToastAction asChild altText={description}>
            <Button
              size={size}
              variant={typeToast}
              onClick={() => {
                location.assign(linkButton)
              }}
            >
              {titleButton}
            </Button>
          </ToastAction>
        </ToastRoot>
        <ToastViewport />
      </RadixToast.Provider>
    </>
  )
}

Toast.displayName = 'Toast'
