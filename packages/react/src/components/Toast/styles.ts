import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  right: 0,
  bottom: 0,

  width: 360,
  maxWidth: '100vw',
  margin: 0,

  padding: 32,

  listStyle: 'none',
  outline: 'none',
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
    opacity: 0,
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
    opacity: 1,
  },
  to: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
})

export const ToastContainer = styled(Toast.Root, {
  position: 'relative',

  background: '$gray800',
  outline: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',

  '&[data-state=open]': {
    animation: `${slideIn} 0.4s ease-in-out`,
  },

  '&[data-state=closed]': {
    animation: `${slideOut} 0.4s ease-in-out`,
  },

  '&:focus-visible': {
    outlineColor: '$ignite500',
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontFamily: '$default',
  fontWeight: '$bold',

  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontFamily: '$default',

  marginTop: '$1',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: 16,
  right: 16,

  background: 'transparent',
  color: '$gray200',

  cursor: 'pointer',
  border: 'none',
  outline: 'none',

  padding: 0,
  lineHeight: 0,

  '&:focus-visible': {
    outline: '1px solid $ignite500',
  },
})