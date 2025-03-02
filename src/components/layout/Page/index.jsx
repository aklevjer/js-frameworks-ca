import { Helmet } from "react-helmet-async";

/**
 * Sets the meta title and description for the page and renders the page content.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the page.
 * @param {string} props.description - The meta description for the page.
 * @param {React.ReactNode} props.children - The content to be rendered inside the page.
 *
 * @returns {JSX.Element} The rendered page component.
 */
export default function Page({ title, description, children }) {
  return (
    <>
      <Helmet>
        <title>{title} - DirectShop</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
}
