
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Men from './pages/Men';
import Women from './pages/women';
import Kids from './pages/Kids';
import Courses from './pages/Courses';
import CoursesDetails from './pages/CoursesDetails';
import Nav2 from './components/Nav2';
const App = () => {
  return (
    <div className='h-screen text-white bg-black'>
      <Navbar/>
      <Nav2/>
      <Routes>
<Route path='/' element={<Home/> }> </Route>
<Route path='/about' element={<About/> }> </Route>
<Route path='/courses' element={<Courses/>}></Route>
<Route path='/courses/:CourseId' element={<CoursesDetails/>}></Route>
<Route path='/product' element={<Product/> }> 
      <Route path='men' element={<Men/> }> 
      </Route>
      <Route path='women' element={<Women/> }>
       </Route> 
        <Route path='kids' element={<Kids/> }></Route>
</Route>
<Route path='*' element={<NotFound/> }> </Route>
     
      </Routes>
     
      <Footer/>
      
    </div>
  )
}

export default App
