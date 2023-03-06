import React from "react";
import PostSample from './PostSample';
import { usePrismicDocumentsByType } from "@prismicio/react";

const PostList = ({posts}) => {
     return (
          <div className="blog-main">
              {posts.map((post) => (
                <PostSample post={post} key={post.id} />
              ))}
          </div>
        );
  //  }

}

export default PostList