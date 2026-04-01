import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';

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
