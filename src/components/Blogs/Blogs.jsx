import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 container mx-auto">
            <h2 className="text-2xl font-semibold">Blogs:{blogs.length}</h2>
            {
                blogs.map(blog =>
                     <Blog key={blog.id}
                      blog={blog}
                      ></Blog>)
            }
        </div>
    );
};

export default Blogs;