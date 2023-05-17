function ArticleListByCategory({ articles, category }) {

  return (
    <>
      <h3>Showing news for category {category}</h3>

      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title}
          </h2>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', ['name=Godswill'])
  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
