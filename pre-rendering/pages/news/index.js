function NewsArticleList({ articles }) {
  return (
    <>
      <h2>List of news</h2>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>
            {article.id} {article.title} | {article.category}
          </h3>
        </div>
      ))}
    </>
  );
}

export default NewsArticleList;

export async function getServerSideProps() {
  const data = await fetch("http://localhost:4000/news");
  const jsonData = await data.json();

  return {
    props: {
      articles: jsonData,
    },
  };
}
