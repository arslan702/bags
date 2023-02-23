import '@/styles/globals.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Catagory from '../Components/category/Catagory'
import Details from '../pages/details/index'
import Cart from '../pages/Cart/Cart'
import Shipping from '../pages/Shipping/Shipping'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    {/* <Catagory/> */}
    {/* <Details/> */}
    {/* <Cart/> */}
    <Shipping/>
  {/* <Component {...pageProps} /> */}
  <Footer/>
  </>
  )
}
