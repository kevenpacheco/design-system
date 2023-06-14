import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@kevenpacheco-ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast.Root,
  args: {
    title: 'Título',
    text: 'Conteúdo',
    open: true,
  },
  argTypes: {
    open: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return <Toast.Provider>{Story()}</Toast.Provider>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
