import react from 'react';
import { useState } from 'react'
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer'
import { TestProduct } from '../components/TestProduct';
import { GetServerSideProps } from 'next';
import Head from 'next/head';


const pages: number = 4

export default function Home({ product }: {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    expireOn: Date;
    description: string;
    stock: number;
    activo: string;
    

  }[]
}) {
  const [datosProducts, setDatosProducts] = useState(product)
  const [productLimit, setProductLimit] = useState([...product].splice(0, pages))
  const [currentPage, setCurrentPage] = useState(0)

 console.log(product);
  const nextPage = () => {
    const totalElemeProdu: any = datosProducts.length;
    const nextPage: number = currentPage + 1;
    const firstIndex: number = nextPage * pages;

    if (firstIndex >= totalElemeProdu) {
      return;
    }

    setProductLimit([...datosProducts].splice(firstIndex, pages))
    setCurrentPage(nextPage);
  }


  const previousPage = () => {
    const prevPage: number = currentPage - 1
    if (prevPage < 0) return;
    const firstIndex: number = prevPage * pages;
    setProductLimit([...datosProducts].splice(firstIndex, pages))
    setCurrentPage(prevPage);
  }

  return (
    <>
      <Head>
        <title>ShoppFast</title>
      </Head>
      <Navbar />
      <TestProduct products={productLimit} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
      <Footer />
    </>
  )
}

//uso de data feching de next "getServerSideProps" no ayuda a renderisar peticiones de una api y siempre esta escuchando al backend.
export const getServerSideProps: GetServerSideProps = async (context) => {  //
  const rest = await fetch("http://localhost:8000/ProductView/mostrarProductos/");
  const products = await rest.json()
  

  return {
    props: {
      product: products //aqui estamos pasando todos los prodcutos a product jdjdj

    }
  }
}