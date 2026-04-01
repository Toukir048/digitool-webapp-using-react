import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/Banner';
function App() {
  return (

    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <ToastContainer />
    </div>
  )
}

export default App
