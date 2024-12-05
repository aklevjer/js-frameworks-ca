export default function SortSelect({ onSort, disabled }) {
  const handleSort = (event) => {
    const sortOrder = event.target.value;
    onSort(sortOrder);
  };

  return (
    <div className="space-y-2 has-[:disabled]:opacity-60 sm:basis-52">
      <label htmlFor="sort" className="text-m font-medium">
        Sort by
      </label>

      <select
        id="sort"
        onChange={handleSort}
        disabled={disabled}
        className="w-full rounded-md border-r-8 border-r-transparent bg-white p-2 outline-none ring-1 ring-neutral-500 focus:ring-2 focus:ring-neutral-900"
      >
        <option value="default">Default</option>
        <option value="title-asc">Name (A-Z)</option>
        <option value="title-desc">Name (Z-A)</option>
        <option value="price-desc">Price (High to low)</option>
        <option value="price-asc">Price (Low to high)</option>
      </select>
    </div>
  );
}
