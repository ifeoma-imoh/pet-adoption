import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";

const App = () => {

    return(
        <StrictMode>
        <div>
            <header>
            <Link to="/">Adopt Me Please!!</Link>
            </header>
    
            <Router>
                <SearchParams path="/" />
                <Details path="/details/:id" />
            </Router>
               
        </div>
        </StrictMode>
    )

};

render(<App />, document.getElementById("root"));
