"use client";
import { ChevronLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function CustomBreadcrumb({
  className,
  animeName,
  characterName,
  personName,
}: {
  className?: string;
  animeName?: string;
  characterName?: string;
  personName?: string;
}) {
  const asPath = usePathname();
  const paths = asPath.split("/").filter((path) => path);
  const { back } = useRouter();

  return (
    <Breadcrumb className={`py-4 ${className}`}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <button
              onClick={() => back()}
              className="flex items-center space-x-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="cursor-default">|</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          if (index === 1) {
            const p = paths[0];
            if ((p === "anime" || p === "manga") && animeName) {
              path = animeName;
            } else if (p === "characters" && characterName) {
              path = characterName;
            } else if (p === "people" && personName) {
              path = personName;
            }
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
