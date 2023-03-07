import React from "react";
import * as prismicH from "@prismicio/helpers";
import { Link } from "react-router-dom";


const PostSample = ({post}) => {
    const title = prismicH.asText(post.data.post_title)
    const firstTextSlice = post.data.body.find((slice) => slice.slice_type === "text")
    const sample = prismicH.asText(firstTextSlice.primary.text)

    return (
    <div className="blog-post">
        <h2>
            <Link to={`/post/${post.uid}`}>
                {title}
            </Link>
        </h2>
        <p>{sample}</p>
    </div>
);
}

export default PostSample