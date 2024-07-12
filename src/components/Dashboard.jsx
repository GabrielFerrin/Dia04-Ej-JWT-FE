import { Outlet, Routes, Route } from 'react-router'
import './Dashboard.css'
import CreateImage from './CreateImage'
import { Link } from 'react-router-dom'
import Gallery from './Gallery'

const Dashboard = () => {
  return (
    <div className="dashboard-cmp">
      <header>
        <button>Cerrar sesión</button>
        <h2>Bienvenido Juan</h2>
      </header>
      <div className="gallery">

      </div>
      <Outlet />
      <Routes>
        <Route path='/create-image' element={<CreateImage />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </ div>)
}
export default Dashboard