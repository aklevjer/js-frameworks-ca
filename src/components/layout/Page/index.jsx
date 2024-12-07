import { Helmet } from "react-helmet-async";

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
