import { BiSearchAlt2 } from "react-icons/bi";

export default function SearchBar({ searchQuery, onSearch, disabled }) {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query.trim() ? query : "");
  };

  return (
    <div className="space-y-2 sm:basis-52">
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
          className="peer w-full rounded-md bg-white p-2 pl-8 outline-none ring-1 ring-neutral-500 focus:ring-2 focus:ring-neutral-900 disabled:opacity-60"
        />
        <BiSearchAlt2
          size={18}
          className="absolute left-2 top-1/2 -translate-y-1/2 peer-disabled:opacity-60"
        />
      </div>
    </div>
  );
}
