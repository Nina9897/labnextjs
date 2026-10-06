"use client";

import NavigationLink from "./NavigationLink";

function Navigation() {
  return (
    <nav
      aria-label="Navegacion principal"
      className="order-3 w-full sm:order-0 sm:w-auto"
    >
      <ul className="flex items-center gap-5 overflow-x-auto text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <li>
          <NavigationLink href="/" label="Mi carrera" />
        </li>
        <li>
          <NavigationLink href="/about" label="Acerca de" />
        </li>
        <li>
          <NavigationLink href="/blog" label="Blog" />
        </li>
        <li>
          <a
            className="whitespace-nowrap transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
            href="https://nextjs.org/docs/app/getting-started/project-structure"
          >
            Next.js
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;