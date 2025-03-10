/**
 * Displays a circular loading spinner.
 *
 * @component
 * @returns {JSX.Element} The rendered loader component.
 */
export default function Loader() {
  return (
    <div className="mx-auto size-20 animate-spin rounded-full border-8 border-neutral-200 border-t-teal-800"></div>
  );
}
