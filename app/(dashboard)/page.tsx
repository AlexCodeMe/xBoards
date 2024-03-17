'use client'

import BoardList from "@/components/BoardList"
import EmptyOrg from "@/components/EmptyOrg"
import { useOrganization } from "@clerk/nextjs"

type Props = {
  searchParams: {
    search?: string
    favorites?: string
  }
}

const DashboardPage = ({ searchParams }: Props) => {
  const { organization } = useOrganization()

  return (
    <div className='flex-1 h-[calc(100%-80px)] p-6'>
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList
          orgId={organization.id}
          query={searchParams}
        />
      )}
      
    </div>
  )
}

export default DashboardPage