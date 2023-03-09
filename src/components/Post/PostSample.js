import React from "react";
import * as prismicH from "@prismicio/helpers";
import { Link } from "react-router-dom";


const PostSample = ({data, uid}) => {
    const title = prismicH.asText(data.post_title)
    const firstTextSlice = data.body.find((slice) => slice.slice_type === "text")
    const sample = prismicH.asText(firstTextSlice.primary.text)

    return (
    <div className="blog-post">
        <h2>
            <Link to={`/post/${uid}`}>
                {title}
            </Link>
        </h2>
        <p>{sample}</p>
    </div>
);
}

export default PostSample