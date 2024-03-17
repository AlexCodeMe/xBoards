import Canvas from '@/components/Canvas'

interface BoardIdPageProps {
  params: {
    boardId: string
  }
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <div>
      <Canvas boardId={params.boardId} />
    </div>
  )
}

export default BoardIdPage