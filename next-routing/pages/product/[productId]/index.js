import { useRouter } from "next/router";

const productDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>product Detail {productId}</div>;
};

export default productDetail;
