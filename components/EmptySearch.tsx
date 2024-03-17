import Image from 'next/image'
import React from 'react'

type Props = {}

const EmptySearch = (props: Props) => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <Image 
            src='/empty-search.svg'
            height={140}
            width={140}
            alt='Empty'
        />
        <h2 className='text-2xl font-semibold mt-6'>No results found!</h2>
        <p className='text-muted-foreground text-sm mt-2'>Try again</p>
    </div>
  )
}

export default EmptySearch