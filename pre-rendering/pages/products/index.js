import Link from "next/link";

function ProductList({ products }) {
  return (
    <>
      <h3>List of products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`} passHref>
            <h2>
              {product.id} {product.price}
            </h2>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  const data = await fetch("http://localhost:4000/products");
  const jsonData = await data.json();

  return {
    props: {
      products: jsonData,
    },
  };
}
