import './styles/common.css'
import './styles/blog.css'
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Category from './components/Post/PostsCategory';
import Posts from './components/Post/Posts';
import NotFound from './pages/NotFound';

function App() {

    return (
      <Router >
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route exact path={"blog/:page"} element={<Posts/>}>
            </Route>
          </Route>
          <Route exact path="/blog" element={<Home/>}/>
          <Route exact path="/category" element={<Home/>}>
            <Route exact path="/category/:name" element={<Category/>}>
              <Route exact path={':page'} element={<Category/>}></Route>
            </Route>
          </Route>
          <Route exact path="/post/:uid" element={<Post/>}/>
          <Route path={'/page404'} element={<NotFound/>}></Route>
          <Route path={'*'} element={<NotFound/>}></Route>
        </Routes>
      </Router>
    );
}

export default App;
