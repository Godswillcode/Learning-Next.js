function News({ data }) {
  return <div>{data}</div>;
}

export default News;

export async function getStaticProps(context) {
  console.log("Running getStaticProps", context.previewData);
  return {
    props: {
      data: context.preview
        ? "List of draft article"
        : "List of published article",
    },
  };
}
