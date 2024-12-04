import Button from "../../components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-prose space-y-4 text-center">
      <span className="text-6xl">&#x1F615;</span>
      <h1 className="text-3xl font-bold capitalize">Oops! Page not found</h1>
      <p>
        We’re sorry, but the page you’re looking for doesn’t seem to exist. It might have been
        moved, renamed, or perhaps it never existed.
      </p>
      <Button asLink variant="primary" path="/">
        Back to Shopping
      </Button>
    </section>
  );
}
