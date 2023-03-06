import { PrismicText } from "@prismicio/react";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";
export const Header = ({ image, headline, description, categories }) => {
  return (
    
    <div className="home">
      <div
        className="blog-avatar"
        style={{ backgroundImage: `url(${image.url})` }}
      />
      <h1 className="blog-title">
        <Link to="/"><PrismicText field={headline} /></Link>
      </h1>
      <p className="blog-description">
        <PrismicText field={description} />
      </p>
      <div className="blog-categories">
        <CategoryList categories={categories}/>
      </div>
    </div>
  );
}
