import Cards from "../components/Cards"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Stats from "../components/Stats"

function AdminDashboardLayout(){
    return(
        <div className="bg-gray-100 shadow">
           
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1">
            <Cards />
            <Stats />
        </div>
      
      </div>
      
        </div>
    )
}

export default AdminDashboardLayout