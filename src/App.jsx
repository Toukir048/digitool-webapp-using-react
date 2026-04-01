import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Stats from './components/stats/Stats';
import Pricing from './components/pricing/Pricing';

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Pricing></Pricing>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
