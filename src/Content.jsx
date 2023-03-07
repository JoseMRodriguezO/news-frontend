import axios from "axios";
import { useEffect, useState } from "react";
import { Articlesindex } from "./Articlesindex";

export function Content() {
  const [articles, setArticles] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

  const handleIndexArticles = () => {
    axios.get("http://localhost:3000/articles.json?search_terms=" + searchTerms).then((response) => {
      console.log(response.data);
      setArticles(response.data.articles);
    });
  };
  return (
    <div>
      <h1>Welcome to React!</h1>
      <div>
        Search: <input value={searchTerms} onChange={(event) => setSearchTerms(event.target.value)} type="text" />
        <button onClick={handleIndexArticles}>Submit</button>
      </div>
      <Articlesindex articles={articles} />
    </div>
  );
}
