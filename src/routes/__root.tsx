import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="status-screen">
      <div className="status-plate">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div className="status-actions">
          <Link to="/" className="btn btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="status-screen">
      <div className="status-plate">
        <h1 className="status-title">This page didn't load</h1>
        <p>Something went wrong on our end. You can try refreshing or head back home.</p>
        <div className="status-actions">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Phasework — Technology Film Production Studio" },
      { name: "google-site-verification", content: "-bn9oPlH7nrpn_wVpSf2yfhY6IJ5Z4EGYjp032FM7ko" },
      { name: "author", content: "Phasework" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      // Share-preview image (previously injected by Lovable hosting; now self-hosted in /public).
      { property: "og:image", content: "https://phasework.work/og-image.png?v=4" },
      { name: "twitter:image", content: "https://phasework.work/og-image.png?v=4" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&family=Archivo:wdth,wght@125,800&family=JetBrains+Mono:wght@400;500&display=swap" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
