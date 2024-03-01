import { X } from 'phosphor-react'
import { Provider as ToastProvider } from '@radix-ui/react-toast'
import { ToastClose, ToastContainer, ToastDescription, ToastTitle, ToastViewport } from "./styles";
import React, { ComponentProps, ReactElement, useState } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
    title: string
    description: string
    defaultOpen: boolean
}

export function Toast({
    title,
    description,
    children,
    defaultOpen,
    }: ToastProps) {
    
    const [toastOpened, setToastOpened] = useState(defaultOpen)

    function handleOpenToast() {
        setToastOpened(true)
    }

    function handleChangeToastOpened(open: boolean) {
        setToastOpened(open)
    }

    const toastTrigger = React.cloneElement(children as ReactElement, {
        onClick: handleOpenToast,
    })

    return (    
        <ToastProvider swipeDirection="right">
            {toastTrigger}

            <ToastContainer open={toastOpened} onOpenChange={handleChangeToastOpened}>
                <ToastTitle>{title}</ToastTitle>
                <ToastDescription>{description}</ToastDescription>

                <ToastClose>
                    <X size={20} />
                </ToastClose>
            </ToastContainer>

            <ToastViewport />
        </ToastProvider>
  )
}
