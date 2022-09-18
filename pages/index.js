import react from 'react';
import {useState} from 'react'
import Navbar from '../components/Navbar';
import {Footer} from '../components/Footer'
// import { Products } from './components/products';
import { TestProduct } from '../components/TestProduct';

const pages = 4

export default function Home({product}) { 
  const [datosProducts, setDatosProducts] = useState(product)
  const [productLimit, setProductLimit] = useState([...product].splice(0, pages))
  const [currentPage, setCurrentPage] = useState(0)

  
  const nextPage = () => {
    const totalElemeProdu = datosProducts.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * pages;

    if (firstIndex >= totalElemeProdu) {
      return;
    }

    setProductLimit([...datosProducts].splice(firstIndex, pages))
    setCurrentPage(nextPage);
  }


  const previousPage = () => {
    const prevPage = currentPage - 1
    if (prevPage < 0) return;
    const firstIndex = prevPage * pages;
    setProductLimit([...datosProducts].splice(firstIndex, pages))
    setCurrentPage(prevPage);
  }

  return (
    <>
      <Navbar/>
      {/* <Products products = {product}/> */}
      <TestProduct products={productLimit} currentPage= {currentPage} previousPage={previousPage} nextPage={nextPage} />
      <Footer/>
    </>
  )
}

//uso de data feching de next "getServerSideProps" no ayuda a renderisar peticiones de una api y siempre esta escuchando al backend.
export const getServerSideProps = async (context) => {  //
  const rest = await fetch("https://fakestoreapi.com/products?limit=20");
  const products = await rest.json()

  return {
    props: {
      product: products //aqui estamos psando todos los prodcutos a product jdjdj
    
    }
  }
}