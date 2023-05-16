import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const handleOrder = () => {
    console.log("Order placed");
    router.push("/product");
  };
  return (
    <div>
      <nav className="bg-purple-700 text-white p-3 flex gap-2">
        <Link href="/product">Products</Link>
        <Link href="/docs">Docs</Link>
      </nav>
      Home page
      <button
        onClick={handleOrder}
        className="bg-blue-500 text-white rounded m-3 p-2"
      >
        Place order
      </button>
    </div>
  );
}

export default Home;
