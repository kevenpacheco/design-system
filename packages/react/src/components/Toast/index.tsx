import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastHeader,
  ToastTitle,
} from './styles'
import * as ToastBase from '@radix-ui/react-toast'

function Provider({ children }: ToastBase.ToastProviderProps) {
  return <ToastBase.Provider>{children}</ToastBase.Provider>
}

Provider.displayName = 'Toast.Provider'

export interface ToastProps extends ToastBase.ToastProps {
  title: string
  text: string
}

function Root({ title, text, ...rest }: ToastProps) {
  return (
    <>
      <ToastContainer {...rest}>
        <ToastHeader>
          <ToastTitle>{title}</ToastTitle>

          <ToastClose>
            <X size={20} />
          </ToastClose>
        </ToastHeader>
        <ToastDescription>{text}</ToastDescription>
      </ToastContainer>
      <ToastBase.Viewport />
    </>
  )
}

Root.displayName = 'Toast.Root'

export const Toast = { Provider, Root }
