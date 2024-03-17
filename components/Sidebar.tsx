import React from 'react'
import NewButton from './NewButton'
import List from './List'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className='fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex flex-col p-3 gap-y-4 text-white'>
      <List />
      <NewButton />
    </aside>
  )
}

export default Sidebar