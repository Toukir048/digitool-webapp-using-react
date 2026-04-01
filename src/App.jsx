import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/navbar/navbar';
function App() {
  return (

    <div>
        <Navbar></Navbar>
        <ToastContainer />
    </div>
  )
}

export default App
