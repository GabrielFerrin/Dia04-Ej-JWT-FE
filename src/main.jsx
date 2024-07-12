import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataProvider.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Dashboard from './components/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </DataProvider>
)
