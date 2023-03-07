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
        if(page > pages || !isNaN(parseInt(page)) ){
            navigate(`${path}/1`)
        }
    },[navigate, page, pages, path])
    
    const activeClass = 'active';
    const links = (new Array(pages).fill(0)).map((item, index) => 
        <li key={index}>
            <NavLink activeclassname={activeClass} to={`${path}/${index +1 }`}>{index + 1 }</NavLink>
        </li>
    )

    return (
        <>
                {children.slice(begin, end)}
                <nav className="blog-pagination">
                    <ul>{links}</ul>
                </nav>
        </>
    )
}

export default PaginationRoute