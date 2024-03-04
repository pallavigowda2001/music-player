import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import './App.css'
import Menu from './Pages/Menu'
import Home from './components/Home'
import About from './components/About'
import Pnf from  './components/Pnf'
import Tracks from "./components/Tracks";




function App(){
    return(
        <BrowserRouter>
           <Menu/>
               <Routes>
                {/* router provider */}
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/about`} element={<About/>}/>
                    <Route path={`/tracks/:aId`} element={<Tracks/>}/>

                    <Route  path={`/*`} element={<Pnf/>}/>

               </Routes>
        </BrowserRouter>

    )
}

export default App