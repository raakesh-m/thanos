import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-2 h-screen w-full">
      <div className="hidden lg:flex flex-col items-center justify-center relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>
        <div className="relative z-10 animate-pulse-slow duration-10000 w-full max-w-md flex items-center justify-center">
          <Image
            src="/thanos.png"
            alt="Thanos"
            width={500}
            height={500}
            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            priority
          />
        </div>
        <div className="absolute bottom-8 left-8 right-8 text-white/70 text-xs font-mono">
          <div className="border-t border-white/10 pt-4 flex justify-between">
            <span>THANOS // INEVITABILITY</span>
            <span className="animate-pulse">SYSTEM ACTIVE</span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center px-4 sm:px-8 py-12 overflow-y-auto bg-gradient-to-b from-background/80 to-background">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
