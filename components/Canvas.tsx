'use client'

import { useCallback, useState } from "react"

import Info from "./Info"
import Participants from "./Participants"
import Toolbar from "./Toolbar"

import { Camera, CanvasMode, CanvasState } from "@/types/canvas"
import { useCanRedo, useCanUndo, useHistory, useMutation } from "@/liveblocks.config"
import { CursorsPresence } from "./CursorsPresence"
import { pointerEventToCanvasPointer } from "@/lib/utils"

type Props = {
    boardId: string
}

const Canvas = ({ boardId }: Props) => {
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 })
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  })

  const history = useHistory()
  const canUndo = useCanUndo()
  const canRedo = useCanRedo()

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY
    }))
  }, [])
  
  const onPointerMove = useMutation(({ setMyPresence }, e: React.PointerEvent) => {
    e.preventDefault()

    const current = pointerEventToCanvasPointer(e, camera)

    setMyPresence({ cursor: current })
  }, [])

  return (
    <main
        className='h-full w-full relative bg-neutral-100 touch-none'
    >
        <Info boardId={boardId} />
        <Participants />
        <Toolbar 
          canvasState={canvasState}
          setCanvasState={setCanvasState}
          canRedo={canRedo}
          canUndo={canUndo}
          undo={history.undo}
          redo={history.redo}
        />
        <svg
          className='h-[100vh] w-[100vw]'
          onWheel={onWheel}
          onPointerMove={onPointerMove}
        >
          <g>
            <CursorsPresence />
          </g>
        </svg>
    </main>
  )
}

export default Canvas