export function generateStaticParams() {
  return [
    { id: "web-dev" },
    { id: "ai-automation" },
    { id: "content-creation" },
    { id: "e-commerce" },
    { id: "branding" },
    { id: "marketing" }
  ];
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
