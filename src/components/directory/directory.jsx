import React from "react";
import Category from "../category/category";
import "./directory-style.scss";

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <Category key={category.id} Category={category} />
            ))}
        </div>
    );
};

export default Directory;
