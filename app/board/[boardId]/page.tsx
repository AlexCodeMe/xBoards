import Canvas from '@/components/Canvas'
import CanvasLoading from '@/components/CanvasLoading'
import Room from '@/components/Room'

interface BoardIdPageProps {
  params: {
    boardId: string
  }
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <div>
      <Room roomId={params.boardId} fallback={<CanvasLoading />}>
        <Canvas boardId={params.boardId} />
      </Room>

    </div>
  )
}

export default BoardIdPage