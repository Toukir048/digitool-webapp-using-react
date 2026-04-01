import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Stats from './components/stats/Stats';
import Pricing from './components/pricing/Pricing';
import Steps from './components/step/Steps';
import { useState } from 'react';
import AllProducts from './components/allProducts/AllProducts';

function App() {
  const [productCart, setProductCart] = useState([]);
  return (

    <div>
      <Navbar productCart={productCart} ></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <AllProducts productCart={productCart} setProductCart={setProductCart}></AllProducts>
      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}
export default App;
