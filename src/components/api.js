import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://hmm-news.herokuapp.com/api",
});

export function fetchArticles() {
  return newsApi.get("/articles").then((response) => {
    return response.data;
  });
}
