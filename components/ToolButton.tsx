'use client'

import React from 'react'
import Hint from './Hint'
import { LucideIcon } from 'lucide-react'
import { Button } from './ui/button'

type Props = {
    label: string
    icon: LucideIcon
    onClick: () => void
    isActive?: boolean
    isDisabled?: boolean
}

const ToolButton = ({
    label,
    icon: Icon,
    onClick,
    isActive,
    isDisabled,
}: Props) => {
  return (
    <Hint
        label={label}
        side='right'
        sideOffset={14}
    >
        <Button
            disabled={isDisabled}
            onClick={onClick}
            size='icon'
            variant={isActive ? 'boardActive' : 'board'}
        >
            <Icon />
        </Button>
    </Hint>
  )
}

export default ToolButton