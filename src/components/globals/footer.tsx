"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border text-muted-foreground border-t border-border/30 bg-card/60 relative z-20">
      <div className="container py-4 flex-col flex items-center justify-center text-center">
        <span>
          Made with ❤️ by{" "}
          <Link
            href={"https://www.jrtilak.dev"}
            className="underline hover:text-foreground"
            target="_blank"
          >
            jrTilak.
          </Link>{" "}
          and{" "}
          <Link
            href={"https://github.com/AbhishekNiraula"}
            className="underline hover:text-foreground"
            target="_blank"
          >
            AbhishekNiraula
          </Link>
        </span>
        <span>
          &copy;{" "}
          <Link
            href={"https://www.aceserc.org"}
            className="underline hover:text-foreground"
            target="_blank"
          >
            ACES
          </Link>{" "}
          and{" "}
          <Link
            href={"https://www.facebook.com/excessnepal"}
            className="underline hover:text-foreground"
            target="_blank"
          >
            EXCESS
          </Link>
          - {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};
export { Footer };
