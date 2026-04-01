import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
