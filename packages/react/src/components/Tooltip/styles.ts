import { keyframes, styled } from '../../styles'

const fade = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

export const TooltipText = styled('span', {
  position: 'absolute',
  backgroundColor: '$gray900',
  padding: '$4 $3',
  borderRadius: '$sm',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  color: '$gray100',
  width: 'max-content',
  userSelect: 'none',
  opacity: 0,

  '&::after': {
    content: '',
    position: 'absolute',
    backgroundColor: '$gray900',
  },

  variants: {
    position: {
      top: {
        bottom: 'calc(100% + 8px + 8px)',
        '&::after': {
          width: 16,
          height: 8,
          bottom: -8,
          left: '50%',
          transform: 'translateX(-50%)',
          clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)',
        },
      },
      left: {
        right: 'calc(100% + 8px + 8px)',
        '&::after': {
          width: 8,
          height: 16,
          right: -8,
          top: '50%',
          transform: 'translateY(-50%)',
          clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)',
        },
      },
      bottom: {
        top: 'calc(100% + 8px + 8px)',
        '&::after': {
          width: 16,
          height: 8,
          top: -8,
          left: '50%',
          transform: 'translateX(-50%)',
          clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
        },
      },
      right: {
        left: 'calc(100% + 8px + 8px)',
        '&::after': {
          width: 8,
          height: 16,
          left: -8,
          top: '50%',
          transform: 'translateY(-50%)',
          clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)',
        },
      },
    },
  },

  defaultVariants: {
    position: 'top',
  },
})

export const TooltipContainer = styled('div', {
  position: 'relative',
  display: 'inline-grid',
  placeItems: 'center',

  [`&:hover ${TooltipText}`]: {
    animationName: fade,
    animationDuration: '1s',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    animationDelay: '1.5s',
  },
})
