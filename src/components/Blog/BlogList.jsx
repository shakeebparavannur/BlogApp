import React, { useContext } from "react";
import { BlogComponent } from "../../App";
import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = () => {
  const { blog } = useContext(BlogComponent);
  // console.log(blog);
  return (
    <div className="container">
      {blog.map((b, key) => {
        
        return (
          <Link to={`details/${b.id}`} key={b.id}>
            <div className="blog-item" >
              <h3>
                {key + 1}. {b.title}
              </h3>

              {/* <button className="read-more">Read More</button> */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogList;
