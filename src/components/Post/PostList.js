import React from "react";
import PostSample from './PostSample';
import Pagination from "../Pagination/Pagination";

const PostList = ({posts, path}) => {
     return (
          <div className="blog-main">
            <Pagination path={path}>
              {posts.map((post) => (
                <PostSample post={post} key={post.id} />
              ))}
            </Pagination>
          </div>
        );
  //  }

}

export default PostList