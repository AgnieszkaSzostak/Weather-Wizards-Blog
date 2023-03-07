import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Błąd 404</h1>
            <p>Podana strona nieistnieje</p>
            <Link to="/blog/1">Wróć na stronę główną</Link>
        </div>
    )
} 
export default NotFound