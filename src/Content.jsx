import axios from "axios";
import { useEffect, useState } from "react";
import { AritclesIndex } from "./Articlesindex";

export function Content() {
  const [articles, setArticles] = useState([]);
  const handleIndexArticles = () => {
    axios.get("http://localhost:3000/articles.json").then((response) => {
      console.log(response.data);
      setArticles(response.data.articles);
    });
  };

  useEffect(handleIndexArticles, []);
  return (
    <div>
      <h1>Welcome to React!</h1>
      <AritclesIndex articles={articles} />
    </div>
  );
}
