import React, {useEffect} from "react";
import { useParams } from "react-router";
import { SliceZone, usePrismicDocumentByUID } from '@prismicio/react';
import { Layout } from "../components/Layout";
import * as prismicH from "@prismicio/helpers";
import { components } from '../slices/index';
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const Post = () => {
    const {uid} = useParams();
    const [prismicDoc, prismicDocState] = usePrismicDocumentByUID("post", uid);

  useEffect(() => {
    if (prismicDocState.state === "failed") {
      console.warn(
        "Blog post document was not found. Make sure it exists in your Prismic repository"
      );
    }
  }, [prismicDocState.state]);

  if (prismicDoc) {
    const title = prismicH.asText(prismicDoc.data.post_title) || "Untitled";
    const categories = prismicDoc.data.categories.map(cat => {
      return <li class="post-category-item" key={cat.category.url}><Link className="post-categories-link" to={`${cat.category.url}/${cat.category.slug}`}>{cat.category.slug}</Link></li>
  } )

  
  return (
      <Layout wrapperClass="main post" >
         <div className="outer-container">
          <BackButton/>
          <h1 className="post-title">{title}</h1>
          <ul className="post-categories">{categories}</ul>
        </div>
        <SliceZone slices={prismicDoc.data.body} components={components} />
      </Layout>
    );
  }
}

export default Post