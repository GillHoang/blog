import React, { Fragment } from "react";

const HomePage = () => {
    document.title = "Gill Coder | Home";
    return (
        <Fragment>
            <h1 className="text-5xl w-screen h-screen flex items-center justify-center">
                Hello, World. I am Gill Coder.
            </h1>
        </Fragment>
    );
};

export default HomePage;
