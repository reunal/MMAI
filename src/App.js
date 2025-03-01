import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import Guide from "./components/Guide";
import MobileMainPage from "./mobile/MobileMainPage";
import Write from "./components/board/Write";
import BoardList from "./components/board/BoardList";
import BoardDetail from "./components/board/BoardDetail";
import Layout from "./components/Layout/Layout";

function App() {
  const [disPlay, setDisPlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisPlay(true);
    }, 1500);
  });

  return (
    <section className={disPlay ? "App" : "App_none"}>
      <div className="pc">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route exact path="/" element={<MainPage />}></Route>
              <Route path="/board" element={<BoardList />}></Route>
              <Route path="/board/notice/:postId" element={<BoardDetail />} />
              <Route path="/write" element={<Write />} />
            </Route>
            <Route exact path="/Guide" element={<Guide />}></Route>
          </Routes>
        </BrowserRouter>
      </div>

      <div className="mobile">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MobileMainPage />} />
            <Route path="/Guide" element={<Guide />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;
