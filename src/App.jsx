import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Stats from './components/stats/Stats';

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
