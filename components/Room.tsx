'use client'

import { RoomProvider } from '@/liveblocks.config'
import { ClientSideSuspense } from '@liveblocks/react'
import React, { ReactNode } from 'react'

type Props = { 
    children: ReactNode, 
    roomId: string,
    fallback: NonNullable<ReactNode> | null,
}

const Room = ({ children, roomId, fallback }: Props) => {
  return (
    <RoomProvider id={roomId} initialPresence={{ cursor: null, }}>
        <ClientSideSuspense fallback={fallback} >
            {() => children}
        </ClientSideSuspense>
    </RoomProvider>
  )
}

export default Room