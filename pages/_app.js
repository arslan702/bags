import '@/styles/globals.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Catagory from './category'
import Details from '../pages/details/index'
import Cart from './Cart'
import Shipping from './Shipping'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    {/* <Catagory/> */}
    {/* <Details/> */}
    {/* <Cart/> */}
    {/* <Shipping/> */}
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
