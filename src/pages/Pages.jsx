import {Route, Routes, useLocation } from 'react-router-dom';
import Works from './Works';
import Home from './Home';
import About from './About';
import Anime from './Anime';
import Contact from './Contact';
import Content from './Content';

function Pages() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allWorks' element={<Works/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/anime' element={<Anime/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/works/:name" element={<Content/>}/>
      </Routes>
  )
}

export default Pages