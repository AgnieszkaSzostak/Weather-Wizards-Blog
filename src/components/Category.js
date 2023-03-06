import React from "react";
import {  usePrismicDocumentByUID, usePrismicDocumentsByType } from '@prismicio/react';
import { useParams } from 'react-router-dom';
import PostList from './PostList';

const Category = () => {
    const {name} = useParams()
    const [category] = usePrismicDocumentByUID('category',name)
    const [blogPosts, blogPostsState] = usePrismicDocumentsByType("post")
    if(category && blogPosts){
        const allPosts = blogPosts.results;
        const postCat = category.data.posts.map(item => item.post)
        const filteredPosts = allPosts.filter(post => {
            return postCat.some(item => item.id === post.id)
        })

        return (
            <div >
                <PostList posts={filteredPosts}/>
            </div>
        )
    }

}

export default Category