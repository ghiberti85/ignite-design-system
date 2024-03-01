import {
    Provider as TooltipProvider,
    Root as TooltipRoot,
    Portal as TooltipPortal,
    Trigger as TooltipTrigger,
    TooltipArrow,
  } from '@radix-ui/react-tooltip'
import { TooltipContainer } from "./styles";
import { ComponentProps } from "react";

export interface TooltipProps extends ComponentProps<typeof TooltipRoot> {
    contentValue: string
    isOpened: boolean
}

export function Tooltip({ contentValue, children, isOpened }: TooltipProps) {
    return(
      <TooltipProvider delayDuration={500}>
        <TooltipRoot open={isOpened ? true : undefined}>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipPortal>
            <TooltipContainer>
              <span>{contentValue}</span>
              <TooltipArrow />
            </TooltipContainer>
          </TooltipPortal>
        </TooltipRoot>
      </TooltipProvider>
    )
}

Tooltip.displayName = 'Tooltip'