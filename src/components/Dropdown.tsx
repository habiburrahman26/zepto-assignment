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

const DropdownMenu = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: any;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="">
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value=""> Filter By</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
