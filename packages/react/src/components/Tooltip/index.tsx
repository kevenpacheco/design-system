import * as TooltipBase from '@radix-ui/react-tooltip'
import { TooltipText, TooltipTrigger } from './styles'

export interface TooltipProps extends TooltipBase.TooltipProps {
  text: string
}

function Provider({ children }: TooltipBase.TooltipProviderProps) {
  return <TooltipBase.Provider>{children}</TooltipBase.Provider>
}

Provider.displayName = 'Tooltip.Provider'

function Root({ children, text, ...rest }: TooltipProps) {
  return (
    <TooltipBase.Root {...rest}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipText>
        {text}
        <TooltipBase.Arrow />
      </TooltipText>
    </TooltipBase.Root>
  )
}

Root.displayName = 'Tooltip.Root'

export const Tooltip = { Provider, Root }
