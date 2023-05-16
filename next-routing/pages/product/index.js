import Link from "next/link";

const productList = ({ productId = 10 }) => {
  return (
    <div className="flex gap-3">
      <Link href="/" className="text-blue-500 pb-7">
        Home
      </Link>
      <Link href="/product/1">product 1</Link>
      <Link href="/product/2">product 2</Link>
      <Link href="/product/3" replace>
        product 3
      </Link>
      <Link href={`/product/${productId}`}>product {productId}</Link>
    </div>
  );
};

export default productList;
