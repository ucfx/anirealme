"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function CustomBreadcrumb({
  className,
  animeName,
}: {
  className?: string;
  animeName?: string;
}) {
  const asPath = usePathname();
  const paths = asPath.split("/").filter((path) => path);

  return (
    <Breadcrumb className={`py-4 ${className}`}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          if (index === 1 && animeName) {
            path = animeName;
          }

          return (
            <React.Fragment key={path}>
              {index === 0 && <BreadcrumbSeparator />}

              <BreadcrumbItem className="capitalize">
                {isLast ? (
                  <BreadcrumbPage>{path}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{path}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
