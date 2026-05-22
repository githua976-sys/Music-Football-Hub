
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import PlayerDock from './PlayerDock'
import Footer from '../Shared/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

  return (
    <div className="flex h-screen overflow-hidden theme-bg theme-text">

      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex flex-col flex-1">

        <Topbar/>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet/>
          <Footer />
        </main>

        <PlayerDock/>

  </div>



    </div>
  )
}

export default MainLayout