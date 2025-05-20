"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggler from "@/components/theme/toggler";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/components/user-profile";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import {
  PanelsTopLeft,
  Shield,
  Database,
  Server,
  Component,
  Code,
  ArrowRight,
  Sparkle,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  Terminal,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const { data: session, isPending } = useSession();

  const handleCopy = () => {
    navigator.clipboard.writeText(`git clone ${siteConfig.socials.github}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_75%)] pointer-events-none"></div>

      {/* Header */}
      <header className="fixed top-0 max-w-7xl w-full z-50 backdrop-blur-sm border-b border-foreground/10">
        <div className="container  mx-auto px-2 flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-mono font-bold text-lg tracking-tight flex items-center gap-2"
          >
            <div className="relative w-8 h-8 overflow-hidden rounded-full border border-foreground/20">
              <Image
                src="/thanos.png"
                alt="Thanos"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span>THANOS</span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            {!isPending && session ? (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hidden sm:flex"
              >
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 group"
                >
                  <span>Dashboard</span>
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hidden sm:flex"
              >
                <Link href="/sign-in" className="flex items-center gap-2 group">
                  <span>Sign In</span>
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Button>
            )}
            <UserProfile className="size-9 sm:size-10" />
            <ThemeToggler className="size-9 sm:size-10 mr-0 sm:mr-2" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 container max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full border border-muted-foreground/20 bg-background/30 px-3 py-1 text-sm text-muted-foreground">
              <span className="mr-1 text-xs animate-pulse">●</span> Version
              1.0.0
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter">
              Perfectly balanced
              <br />
              <span className="text-muted-foreground">
                As all things should be.
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {siteConfig.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                <Link href="/dashboard" className="gap-2 group">
                  <span>Get Started</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-dashed group relative overflow-hidden"
              >
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  className="gap-2"
                >
                  <span className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors"></span>
                  <Github className="size-4" />
                  <span>GitHub</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative aspect-square w-[300px] sm:w-[400px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>
              <Image
                src="/thanos.png"
                alt="Thanos"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                priority
              />
              <div className="absolute -inset-px border border-dashed border-foreground/10 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-16 container max-w-7xl mx-auto px-4">
        <div className="w-full border border-dashed border-foreground/20 rounded-lg overflow-hidden bg-muted shadow-sm dark:bg-black/50 dark:shadow-none">
          <div className="flex items-center gap-2 p-3 border-b border-foreground/10 bg-foreground/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/30"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
            </div>
            <div className="flex-1 text-center font-mono text-xs text-foreground/50">
              terminal
            </div>
          </div>

          <div className="p-4 font-mono text-sm">
            <div className="flex items-center text-muted-foreground mb-2">
              <span className="mr-2">$</span>
              <span>install_thanos</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-background rounded border border-dashed border-foreground/20 dark:bg-foreground/5">
              <pre className="font-mono text-xs sm:text-sm text-foreground/90">
                git clone {siteConfig.socials.github}
              </pre>
              <Button
                variant="ghost"
                size="icon"
                className="size-8 cursor-pointer"
                onClick={handleCopy}
              >
                {copied ? (
                  <Check className="size-4" />
                ) : (
                  <Copy className="size-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 container max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Powered By</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern tech stack for ultimate power and flexibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techConfig.map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              target="_blank"
              className="group relative border border-dashed border-foreground/10 p-6 rounded-lg bg-background/50 hover:bg-foreground/5 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-foreground/5 text-foreground group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <h3 className="text-muted-foreground text-sm font-semibold">
                    {tech.category}
                  </h3>
                </div>
                <ChevronRight className="size-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <h2 className="text-xl font-bold mb-2">{tech.name}</h2>
              <p className="text-sm text-muted-foreground">
                {tech.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-foreground/10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.creator.name}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="size-4" />
              </a>
              <a
                href={siteConfig.creator.url}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors text-xs"
              >
                Created by {siteConfig.creator.name}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const techConfig = [
  {
    icon: <PanelsTopLeft className="size-4" />,
    category: "Full-stack Framework",
    name: "Next.js 15",
    description:
      "Modern, full-stack React framework for building web applications.",
    link: "https://nextjs.org",
  },
  {
    icon: <Shield className="size-4" />,
    category: "Authentication",
    name: "Better-Auth",
    description:
      "Secure authentication solution with OAuth, email/password, magic links, and more",
    link: "https://better-auth.com",
  },
  {
    icon: <Database className="size-4" />,
    category: "ORM",
    name: "Drizzle ORM",
    description:
      "TypeScript ORM with a focus on type safety and developer experience.",
    link: "https://orm.drizzle.team/",
  },
  {
    icon: <Server className="size-4" />,
    category: "Database",
    name: "Postgres",
    description: "It's a Postgres database, what else do you need?",
    link: "https://neon.tech",
  },
  {
    icon: <Component className="size-4" />,
    category: "UI Components",
    name: "ShadCN/UI",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS.",
    link: "https://ui.shadcn.com",
  },
  {
    icon: <Code className="size-4" />,
    category: "CSS Framework",
    name: "Tailwindcss v4",
    description:
      "Utility-first CSS framework for rapidly building custom user interfaces.",
    link: "https://tailwindcss.com",
  },
];
