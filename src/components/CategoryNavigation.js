import React from "react";
import { NavLink } from 'react-router-dom';

const CategoryNavigation = ({categories}) => {
    if(categories){
        const activeClass = "active"
        return (
            <nav className="outer-container navigation">
                <ul className="navigation-list"> 
                    {categories.map(cat => <li
                    className="navigation-item"
                        key={cat.uid}>
                            <NavLink className="navigation-link" activeclassname={activeClass} to={`${cat.url}/${cat.slugs[0]}`}>
                                {cat.uid}
                            </NavLink>
                        </li>)}
                </ul>
            </nav>
        )
    }
}

export default CategoryNavigation