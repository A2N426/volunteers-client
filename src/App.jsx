import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Shared/Navbar'

function App() {

  return (
    <div className='px-6 md:px-36'>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
