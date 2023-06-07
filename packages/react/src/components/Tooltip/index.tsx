import { ComponentProps } from 'react'
import { TooltipContainer, TooltipText } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipText> {
  text: string
}

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipText>{text}</TooltipText>
      {children}
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
