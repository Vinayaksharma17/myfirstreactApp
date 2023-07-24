import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setblogs(newBlogs)
    // }
    return (  
        <div className="home">
            { error && <div> {error} </div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title="All Blogs!"/>}
            {/* <BlogList blogs = {blogs.filter((blog)=>blog.author ==="vraaj")} title="vraaj's Blogs!"/> // this line of code used to filter out only vraaj's blog */}
            {/* <button onClick={()=> setName('Vraaj')}>Change Name</button> */}
            {/* <p>{ name }</p> */}
        </div>
    );
}
 
export default Home;