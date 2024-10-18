import React, { useState } from 'react';

const categories = [
  'Browsing: Culture/Civilization/Society',
  'Browsing: Fiction',
  'Browsing: Gender & Sexuality Studies',
  'Browsing: Literature',
  'Browsing: Science-Fiction & Fantasy',
  'Gothic Fiction',
  'Movie Books',
  'Precursors of Science Fiction',
  'Science Fiction by Women',
];

const DropdownMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="w-64 mx-auto mt-4">
      <label
        htmlFor="category"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select Category
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Choose a category...</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      {selectedCategory && (
        <p className="mt-4 text-sm text-gray-600">
          Selected Category: <strong>{selectedCategory}</strong>
        </p>
      )}
    </div>
  );
};

export default DropdownMenu;
