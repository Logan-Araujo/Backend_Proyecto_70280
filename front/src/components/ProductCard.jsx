export default function ProductCard({ product }) {
  return (
    <article className="bg-white p-2 m-2 flex flex-col justify-center items-center" >
        <p>{product.title}</p>
        <p>PESOS {product.price} - {product.stock}</p>
    </article>
  )
}
