import React from "react";
import { usePrismicDocumentsByType } from '@prismicio/react';
import PostList from "./PostList";

const Posts = () => {
    const [blogPosts] = usePrismicDocumentsByType("post")
    if(blogPosts){
        return (
            <PostList posts={blogPosts.results}/>
        )
    }
}

export default Posts