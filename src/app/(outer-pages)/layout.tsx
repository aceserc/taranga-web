import { Footer } from "@/components/globals/footer";
import { Header } from "@/components/globals/header";
import { buttonVariants } from "@/components/ui/button";
import { currentTechfest } from "@/data/techfest";
import { cn } from "@/helpers/cn";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      {/* bg image */}
      <div
        className="fixed inset-0 z-0 bg-center bg-no-repeat bg-cover opacity-[0.03]"
        style={{ backgroundImage: "url(/assets/images/erc.jpg)" }}
      />
      <Header
        routes={[
          {
            href: "/#hero",
            label: "Home",
          },
          {
            href: "/#highlights",
            label: "Highlights",
          },
          {
            href: "/#welcome-message",
            label: "Welcome Message",
          },
          {
            href: "/events",
            label: "Events",
          },
          {
            href: "/about",
            label: "About",
          },
        ]}
        rightContent={
          <Link
            href={currentTechfest.path}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "min-w-32 group/arrow max-lg:w-full"
            )}
          >
            Explore
            <ArrowRightIcon className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
          </Link>
        }
      />
      <main className="mt-14 overflow-y-auto overflow-x-hidden backdrop-blur-sm min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
