// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './component/homePage/homepage';
import Header from './component/homePage/Header';
import About from './component/homePage/about';
import Contact from './component/homePage/contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Register from './component/Register/register';
import Footer from './component/homePage/footer';
import Tree from './component/Tree/tree';
import Update from './component/update/update';



const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about'element={<About />}/>
          <Route path='/contact' element ={<Contact />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/homepage' element={<Homepage />}/>
          <Route path='/footer'element={<Footer/>}/>
          {/* <Route path='/tree'element={<Tree />}/> */}
          <Route path='/tree' element={<Tree />}/>
          <Route path='/update/:id' element={<Update />}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
