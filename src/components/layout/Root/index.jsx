import { ScrollRestoration, Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function Root() {
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
