import React, {useEffect} from "react";
import { Link, useNavigate, Route, Routes } from "react-router-dom";
import PaginationRoute from "./PaginationRoute";

const Pagination = props => {
    const {children, path, limit = 6} = props

    return (
        <>
         <PaginationRoute
                    path={path}
                    limit={limit}
                >
                    {children}
        </PaginationRoute>
        </>
    )
}

export default Pagination