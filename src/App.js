import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
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
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/" element={<Navigate replace to="/articles" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
