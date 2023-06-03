import React, { useState } from 'react';
import './styles.css'; // Import the CSS file for styling

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', type: 'type1' },
    { id: 2, name: 'Product 2', type: 'type2' },
    { id: 3, name: 'Product 3', type: 'type1' },
    { id: 4, name: 'Product 4', type: 'type1' },
    { id: 5, name: 'Product 5', type: 'type2' },
    { id: 6, name: 'Product 6', type: 'type1' },
    { id: 7, name: 'Product 7', type: 'type1' },
    { id: 8, name: 'Product 8', type: 'type2' },
    { id: 9, name: 'Product 9', type: 'type1' },

    // Add more product objects as needed
  ];

  const perPage = 6; // Number of products to display per page

  // Filter products based on search query and selected type
  const filteredProducts = products.filter((product) => {
    const isMatchingType = selectedType === 'all' || product.type === selectedType;
    const isMatchingSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return isMatchingType && isMatchingSearch;
  });

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  // Pagination logic to determine the currently displayed products
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset the current page to 1 when performing a search
  };

  const handleTypeChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
    setCurrentPage(1); // Reset the current page to 1 when changing the selected type
  };

  const handlePageChange = (page : any) => {
    setCurrentPage(page);
  };

  return (

    <div className="bg-[#27282b]">
    <h3 className="product-title pt-12">Our Products</h3>
    <div className="products-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="all">All Types</option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
          {/* Add more options for different product types */}
        </select>
      </div>

      <div className="product-cards">
        {displayedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Type: {product.type}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;