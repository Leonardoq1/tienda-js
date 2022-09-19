export const TestProduct = ({ products, currentPage, previousPage, nextPage }) => {
    return (
        <>
        <h1 className="text-center text-black text-lg font-bold ">Pagina {currentPage + 1}</h1>
            <div className="grid grid-cols-2 gap-2  place-content-center ">
                <button className="rounded-md bg-gray-200 px-4 py-2  transition duration-300 hover:bg-lime-300" onClick={previousPage}> <strong>Previous</strong> </button>
                <button className="rounded-md bg-gray-200 px-4 py-2  transition duration-300 hover:bg-lime-300" onClick={nextPage}> <strong>Next</strong> </button>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                    <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                        
                        {
                           products.map((produ)=>{
                            return (
                            <a key={produ.id} href="#" className="group  ">
                            <div className=" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={produ.image}
                                    alt={'Img product'}
                                    className="h-full w-full object-cover object-center group-hover:opacity-50 "
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{produ.name}</h3>
                            <h4 className="mt-4 text-sm text-gray-700">{produ.description}</h4>
                            <p className="mt-1 text-lg font-medium text-gray-900">${produ.price}</p>
                        </a>)
                           })
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}
