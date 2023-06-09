import React, {useEffect} from "react";
import {  NavLink, useParams, useNavigate} from "react-router-dom";

const PaginationRoute = (props) => {
    const {page} = useParams(); 
    const {children, path, limit} = props
    const length = children.length
    const navigate = useNavigate()
    const begin = limit *(page - 1)
    const end = page * limit
    const pages = Math.ceil(length / limit)
 
    useEffect(()=>{
        if(page > pages || isNaN(page) ) {
            navigate(`${path}/1`)
        }
    },[navigate, page, pages, path])
    
    const activeClass = 'active';
    const links = (new Array(pages).fill(0)).map((item, index) => 
        <li className="blog-pagination-item" key={index}>
            <NavLink className="blog-pagination-link" activeclassname={activeClass} to={`${path}/${index +1 }`}>{index + 1 }</NavLink>
        </li>
    )

    return (
        <>
                {children.slice(begin, end)}
                <nav className="blog-pagination">
                    <ul className="blog-pagination-list">{links}</ul>
                </nav>
        </>
    )
}

export default PaginationRoute