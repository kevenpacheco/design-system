import { Meta, StoryObj } from '@storybook/react'
import {
  Avatar,
  Box,
  Tooltip,
  TooltipProps,
} from '@kevenpacheco-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Avatar src="https://github.com/kevenpacheco.png" alt="Keven Pacheco" />
    ),
    text: 'Avatar Teste',
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
