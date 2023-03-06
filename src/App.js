import './styles/common.css'
import './styles/blog.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Category from './components/Category';
import Posts from './components/Posts';

function App() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route exact path="/blog" element={<Posts/>}>
            </Route>
          </Route>
          <Route path="/category" element={<Home/>}>
            <Route path="/category/:name" element={<Category/>}></Route>
          </Route>
          <Route path="/post/:uid" element={<Post/>}/>
        </Routes>
      </Router>
    );
}

export default App;
