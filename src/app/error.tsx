"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Terminal, RefreshCw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid min-h-screen w-full place-items-center px-4 py-12 lg:grid-cols-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_75%)]"></div>

      {/* Visual side */}
      <div className="hidden lg:flex flex-col items-center justify-center relative">
        <div className="relative max-w-md flex flex-col items-center">
          <Image
            src="/thanos.png"
            alt="Thanos Error"
            width={300}
            height={300}
            className="object-contain grayscale opacity-60"
            priority
          />
          <div className="mt-8 font-mono text-xs tracking-tight text-muted-foreground">
            <div className="grid grid-cols-3 gap-x-2 gap-y-1 opacity-70">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full border border-dashed border-muted py-1 px-2 text-center"
                >
                  ERROR
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
            <span className="mr-1 text-xs">●</span> system_failure
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            Error 500
          </h1>
          <p className="text-muted-foreground">
            Something went terribly wrong. Perfectly balanced, as all things
            should be.
          </p>
        </div>

        <div className="font-mono text-sm border border-dashed p-4 bg-background/50 text-muted-foreground/80 space-y-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Terminal className="mr-2 h-3 w-3" />
            <span>error_trace.log</span>
          </div>
          <div className="space-y-1">
            <div className="flex">
              <span className="mr-2 opacity-50">$</span>
              <span className="font-medium">error_code</span>
            </div>
            <p className="pl-5 text-xs font-medium overflow-hidden text-ellipsis">
              {error?.digest || "Unknown error"}
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-2 opacity-50">$</span>
            <span className="flex items-center">
              <span className="font-medium">trying_recovery</span>
              <span className="ml-1 h-4 w-[2px] animate-pulse bg-foreground inline-block" />
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            className="border-dashed flex-1 group relative overflow-hidden"
            onClick={reset}
          >
            <span className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors"></span>
            <RefreshCw className="mr-2 h-4 w-4" /> Retry
          </Button>
          <Button
            asChild
            className="flex-1 bg-foreground text-background hover:bg-foreground/90"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
