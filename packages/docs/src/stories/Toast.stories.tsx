import { Button, Toast, ToastProps } from '@ghiberti85-ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quinta-feira, 29 de Fevereiro às 23h',
    children: <Button>Agendar</Button>,
    defaultOpen: false,
  },
  argTypes: {
    children: {
      description: 'Componente trigger que irá abrir o Toast',
      control: {
        type: 'null',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Opened: StoryObj<ToastProps> = {
  args: {
    defaultOpen: true,
  },
}