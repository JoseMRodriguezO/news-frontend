export function AritclesIndex(props) {
  return (
    <div>
      <h1>All articles</h1>
      {props.articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt="" width="400" />
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}
