import React from 'react';
import "../css/filterBar.css"

const FilterBar = () => {
    return (
        <div className="filter-container">
            <div className="filter-item"><label htmlFor="brand-filter">Trademark:</label> <select id="brand-filter">
                <option value="all">All</option>
                <option value="brand1">Thương hiệu 1</option>
                <option value="brand2">Thương hiệu 2</option>
                <option value="brand3">Thương hiệu 3</option>
                <option value="others">Others</option>
            </select></div>
            <div className="filter-item"><label htmlFor="price-filter">Price:</label> <select id="price-filter">
                <option value="all">All</option>
                <option value="price1">Dưới $100</option>
                <option value="price2">$100 - $500</option>
                <option value="price3">$500 - $1000</option>
                <option value="price4">Trên $1000</option>
            </select></div>
            <div className="filter-item">
                <label htmlFor="color-filter">Color:</label>
                <select id="color-filter">
                    <option value="all">All</option>
                    <option value="color1">Màu 1</option>
                    <option value="color2">Màu 2</option>
                    <option value="color3">Màu 3</option>
                    <option value="color3">Others</option>
                </select></div>
            <div className="filter-item">
                <button type="button">Lọc</button>
            </div>
        </div>

    );
};

export default FilterBar;