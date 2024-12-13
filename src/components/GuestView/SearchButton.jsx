import { FaSearch } from "react-icons/fa";

const SearchButton = ({ handleSearch }) => (
    <button
      className="gradient-button flex items-center justify-center py-2 px-4 rounded text-white font-bold"
      onClick={handleSearch}
    >
      <FaSearch className="mr-2" /> Search
    </button>
  );
  
  export default SearchButton;
  