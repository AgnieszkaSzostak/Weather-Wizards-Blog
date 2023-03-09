import React, {useEffect} from "react";
import {  usePrismicDocumentByUID, usePrismicDocumentsByType } from '@prismicio/react';
import { useParams } from 'react-router-dom';
import PostList from './PostList';
import { useLocation, useNavigate } from 'react-router-dom';

const PostsCategory = () => {
    const {name} = useParams()

    const [category, categoryState] = usePrismicDocumentByUID('category',name)
    const [blogPosts, blogPostsState] = usePrismicDocumentsByType("post")
    const path =useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if(path.pathname === `/category/${name}`){
          navigate(`/category/${name}/1`)
        }
      
      }, [navigate, path, name])
    useEffect(() => {
        if(categoryState.state === "failed" || blogPostsState.state === "failed"){
            navigate('/page404')
        }
    }, [navigate, categoryState, blogPostsState])

    if(category && blogPosts){
        const allPosts = blogPosts.results;
        const postCat = category.data.posts.map(item => item.post)
        const filteredPosts = allPosts.filter(post => {
            return postCat.some(item => item.id === post.id)
        })
        return (
            <div >
                <PostList path={`/category/${name}`} posts={filteredPosts}/>
            </div>
        )
    }

}

export default PostsCategory