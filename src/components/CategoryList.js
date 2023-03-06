import React from "react";
import { Link } from 'react-router-dom';

const CategoryList = ({categories}) => {
    if(categories){
        return (
            <div className="outer-container">
                <ul> 
                    {categories.map(cat => <li
                        key={cat.slugs[0]}>
                            <Link to={`${cat.url}/${cat.slugs[0]}`}>
                                {cat.uid}
                            </Link>
                        </li>)}
                </ul>
    
            </div>
        )
    }
}

export default CategoryList