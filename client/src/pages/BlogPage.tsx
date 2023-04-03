import React, { Fragment } from "react";

const BlogPage = () => {
    document.title = "Gill Coder | Blog";
    const blogs = [
        {
            title: "Blog 1",
            description: "Blog 1 description",
        },
        {
            title: "Blog 2",
            description: "Blog 2 description",
        },
    ];
    return (
        <Fragment>
            <h1 className="text-5xl justify-center flex p-7">Blog</h1>
            {blogs.map((blog) => (
                // create box
                <div className="flex flex-col justify-center m-7 bg-[#3A3A43] rounded-2xl">
                    <div className="w-1/2 p-5 rounded-s">
                        <h1 className="text-3xl hover:text-sky-400">{blog.title}</h1>
                        <p className="text-xl text-slate-300">{blog.description}</p>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default BlogPage;
