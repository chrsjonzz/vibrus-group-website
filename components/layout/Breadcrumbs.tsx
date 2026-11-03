import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { generateBreadcrumbJsonLd } from "@/lib/config/seo";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Always start with Home
  const fullItems = [{ label: "Home", href: "/" }, ...items];

  // Schema.org data
  const jsonLd = generateBreadcrumbJsonLd(
    fullItems.map((item) => ({
      name: item.label,
      path: item.href || "",
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center text-xs font-semibold text-slate-500 py-2.5"
      >
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5 sm:gap-2">
                {index === 0 && (
                  <Home className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                )}
                {isLast || !item.href ? (
                  <span
                    className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-blue-700 transition-colors truncate max-w-[150px] sm:max-w-none"
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
