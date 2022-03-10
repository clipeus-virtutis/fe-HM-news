import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import ArticleByTopic from "./components/ArticleByTopic";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <NavBar />
        </nav>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/articles" />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/topics/:topic" element={<ArticleByTopic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
