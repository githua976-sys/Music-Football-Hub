
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import PlayerDock from './PlayerDock'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">

{/* Sidebar */}
<Sidebar/>

{/* Main Content */}
  <div className="flex flex-col flex-1">

<Topbar/>

<main className="flex-1 overflow-y-auto p-6">
<Outlet/>
</main>

<PlayerDock/>

  </div>



    </div>
  )
}

export default MainLayout