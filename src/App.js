import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
import Guide from './components/Guide';
import MobileMainPage from './mobile/MobileMainPage';

function App() {

  const [disPlay, setDisPlay] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {
      setDisPlay(true)
  }, 1500);
  })

  useEffect(() =>{
    const fs = require("fs");
    var file = fs.readFileSync(`${process.env.PUBLIC_URL}/counts/main`)
    file = file.toString();
    file = Number(file);
    file = file+1;
    console.log(file)
    fs.writeFileSync(`${process.env.PUBLIC_URL}/counts/main`, file.toString())
  }, [])

  return (
    <section className={(disPlay) ? "App" : "App_none"}>
      <div className='pc'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage/>}></Route>
            <Route exact path="/Guide" element={<Guide/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>


      <div className='mobile'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MobileMainPage />} />
            <Route path='/Guide' element={<Guide />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;