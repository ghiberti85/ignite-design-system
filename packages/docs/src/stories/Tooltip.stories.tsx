import { Box, Text, Tooltip, TooltipProps } from '@ghiberti85-ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    contentValue: '29 de fevereiro - Indisponível',
    children: (
      <Box as="button" css={{ cursor: 'pointer' }}>
        <Text>21</Text>
      </Box>
    ),
    isOpened: undefined,
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
    isOpened: {
      description: 'Controla se o tooltip é mostrado ou não.',
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'O componente tooltip mostra o conteúdo quando o usuário passar o mouse sobre o elemento.',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const Opened: StoryObj<TooltipProps> = {
  args: {
    isOpened: true,
  },
}