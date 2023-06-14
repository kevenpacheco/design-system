import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled(Toast.Root, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
  padding: '$3 $5',
  borderRadius: '$sm',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',
})

export const ToastHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 24,
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  color: '$white',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$1',
  justifyContent: 'space-between',
  flex: 1,
})

export const ToastClose = styled(Toast.Close, {
  border: 0,
  outline: 0,
  backgroundColor: 'transparent',
  color: '$gray200',
  cursor: 'pointer',
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  display: 'grid',
  placeItems: 'center',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
})
