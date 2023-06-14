import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipText = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$4 $3',
  borderRadius: '$sm',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  color: '$gray100',
  width: 'max-content',
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  backgroundColor: 'transparent',
  padding: 0,
  margin: 0,
  outline: 0,
  border: 0,
})
