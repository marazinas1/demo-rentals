import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Demo" },
      { name: "description", content: "A minimal demo page." },
      { property: "og:title", content: "Demo" },
      { property: "og:description", content: "A minimal demo page." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold">Demo</h1>
    </div>
  );
}
