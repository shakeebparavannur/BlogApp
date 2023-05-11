import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogComponent } from "../../App";
import "./BlogDetails.css";
import NotFound from "./NotFound";

const BlogDetails = () => {
  const { id } = useParams();
  const { blog } = useContext(BlogComponent);
  return (
    <div className="container">
      {
        blog.length != 0 ? (
          blog.map((b) => {
            if (b.id == id) {
              return (
                <div className="blog-details card" key={b.id}>
                  <h1 className="title">{b.title}</h1>
                  <p className="description">{b.description}</p>
                </div>
              );
            }
          })
        ) : (
          <NotFound key={id} />
        )
        //
      }

      <div className="back-home">
        <Link to="/">
          <button> Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
