import Navbar from '@/components/Navbar'
import OrgSidebar from '@/components/OrgSidebar'
import Sidebar from '@/components/Sidebar'

type Props = {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <main className='h-full'> 
        <Sidebar />
        <div className='pl-[60px] h-full'>
            <div className='flex gap-x-3 h-full'>
                <OrgSidebar />
                <div className='flex-1 h-full'>
                    <Navbar />
                    {children}
                </div>
            </div>
        </div>
    </main>
  )
}

export default DashboardLayout