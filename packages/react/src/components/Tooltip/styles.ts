import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  color: '$gray100',
  borderRadius: '$sm',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  width: 16,
  height: 8,
})