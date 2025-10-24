"use client";

import { useParams } from "next/navigation";
import { Header as H } from "@/components/globals/header";
import Link from "next/link";
import { cn } from "@/helpers/cn";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const Header = () => {
  const { techfestVersion } = useParams() as { techfestVersion: string };
  return (
    <H
      routes={[
        {
          href: `/${techfestVersion}/pre-events`,
          label: "Pre-Events",
        },
        {
          href: `/${techfestVersion}/post-events`,
          label: "Post-Events",
        },
      ]}
      rightContent={
        <Link
          href={`/${techfestVersion}/main-events`}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "min-w-32 group/arrow max-lg:w-full"
          )}
        >
          Main Events{" "}
          <ArrowRightIcon className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
        </Link>
      }
    />
  );
};
export { Header };
