import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

type Props = {
    label: string
    children: React.ReactNode
    side?: 'top' | 'bottom' | 'left' | 'right'
    align?: 'start' | 'center' | 'end'
    sideOffset?: number
    alignOffset?: number
}

const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset
}: Props) => {
  return (
    <TooltipProvider>
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent 
                side={side}
                align={align}
                sideOffset={sideOffset}
                alignOffset={alignOffset}
                className='text-white bg-black border-black'
            >
                <p className='font-semibold capitalize'>
                    {label}
                </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default Hint