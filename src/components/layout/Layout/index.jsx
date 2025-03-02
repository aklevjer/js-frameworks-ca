import { ScrollRestoration, Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

/**
 * Wraps the page content with a header, footer, and handles scroll restoration.
 *
 * @component
 * @returns {JSX.Element} The rendered layout component.
 */
export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main className="container pb-20 pt-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
