import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';
import ExploreCar from '../Pages/ExploreCar';
import NoPage from '../Pages/NoPage';
function Layout() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Home/>} />
                    <Route path="About" element={<About/>}/>
                    <Route path="About" element={<Blog/>}/>
                    <Route path="About" element={<Contacts/>}/>
                    <Route path="About" element={<ExploreCar/>}/>
                    <Route path="*" element={<NoPage/>}/>
                
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Layout