import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <h2>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h2>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }
  return <div>Docs Home page</div>;
}

export default Doc;
