import React, { StrictMode } from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams"

const App = () => {

    return(
        <StrictMode>
        <div>
            <h1 id="something-important">Adopt Me Please!!</h1>
                <SearchParams />
        </div>
        </StrictMode>
    )

};

render(<App />, document.getElementById("root"));
