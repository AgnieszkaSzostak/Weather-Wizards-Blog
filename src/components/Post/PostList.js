import React from "react";
import PostSample from './PostSample';
import Pagination from "../Pagination/Pagination";

const PostList = ({posts, path}) => {
     return (
          <main className="blog-main">
            <Pagination path={path}>
              {posts.map((post) => (
                <PostSample uid={post.uid} data={post.data} key={post.id} />
              ))}
            </Pagination>
          </main>
        );
  //  }

}

export default PostList