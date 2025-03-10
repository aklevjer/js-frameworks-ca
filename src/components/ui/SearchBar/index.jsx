import { BiSearchAlt2 } from "react-icons/bi";

/**
 * Renders a search bar component for filtering products.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.searchQuery - The current search query.
 * @param {Function} props.onSearch - Callback function for search action.
 * @param {boolean} props.disabled - Disables the search input if true.
 *
 * @returns {JSX.Element} The rendered search bar component.
 */
export default function SearchBar({ searchQuery, onSearch, disabled }) {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query.trim() ? query : "");
  };

  return (
    <div className="space-y-2 has-[:disabled]:opacity-60 sm:basis-52">
      <label htmlFor="search" className="text-m font-medium">
        Search for products
      </label>

      <div className="relative">
        <input
          type="search"
          id="search"
          onChange={handleSearch}
          value={searchQuery}
          disabled={disabled}
          placeholder="Enter keywords.."
          className="w-full rounded-md bg-white p-2 pl-8 outline-none ring-1 ring-neutral-500 focus:ring-2 focus:ring-neutral-900"
        />
        <BiSearchAlt2 size={18} className="absolute left-2 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
