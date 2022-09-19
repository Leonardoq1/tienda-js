
import { GetServerSideProps } from "next";
import { TableProducts } from "../../components/crud/TableProducts";
import Navbar from "../../components/Navbar";

export default function Index({product}: {
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
})  {
  return (
    <>
    <Navbar/>
    <TableProducts product={product}/>
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
