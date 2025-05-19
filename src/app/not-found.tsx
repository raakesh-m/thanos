import Link from "next/link";
import Image from "next/image";
import { Terminal, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="grid min-h-screen w-full place-items-center px-4 py-12 lg:grid-cols-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_75%)]"></div>

      {/* Visual side */}
      <div className="hidden lg:flex flex-col items-center justify-center relative">
        <div className="relative max-w-md flex flex-col items-center">
          <Image
            src="/thanos.png"
            alt="Thanos"
            width={300}
            height={300}
            className="object-contain grayscale opacity-60 rotate-3"
            priority
          />
          <div className="mt-8 font-mono text-xs tracking-tight text-muted-foreground">
            <div className="grid grid-cols-3 gap-2 opacity-70">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-20 h-8 border border-dashed border-muted"
                >
                  404
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content side */}
      <div className="z-10 w-full max-w-md space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center rounded-full border border-muted-foreground/20 bg-background px-3 py-1 text-sm text-muted-foreground">
            <span className="mr-1 text-xs">●</span> page_missing
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            404 Not Found
          </h1>
          <p className="text-muted-foreground">
            The page you're looking for has been snapped out of existence.
          </p>
        </div>

        <div className="font-mono text-sm border border-dashed p-4 bg-background/50 text-muted-foreground/80">
          <div className="flex items-center text-xs text-muted-foreground">
            <Terminal className="mr-2 h-3 w-3" />
            <span>search_results.log</span>
          </div>
          <div className="flex mt-2">
            <span className="mr-2 opacity-50">$</span>
            <div className="flex items-center">
              <span className="font-medium">searching_page</span>
              <span className="ml-1 h-4 w-[2px] animate-pulse bg-foreground inline-block" />
            </div>
          </div>
          <div className="mt-2 pl-5 text-xs opacity-70">
            <p>No results found.</p>
            <p>Try checking the URL or navigating back home.</p>
          </div>
        </div>

        <Button
          asChild
          className="w-full bg-foreground text-background hover:bg-foreground/90"
        >
          <Link href="/" className="flex items-center justify-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return Home
          </Link>
        </Button>

        <div className="w-full text-center">
          <Link
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center"
          >
            <Search className="mr-1 h-3 w-3" /> Or try searching for something
            else
          </Link>
        </div>
      </div>
    </div>
  );
}
