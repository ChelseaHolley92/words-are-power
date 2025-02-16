import React from "react";

const CategoryDropdown =( { categories, onSelect } ) => {
    return (
        <select Classname="category-dropdown" onChange={onSelect}>
            {categories.map((category, index) => (
                <option key={index} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default CategoryDropdown;