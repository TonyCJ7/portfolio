import Logo from "@/components/Logo/Logo";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#F5F5F4] font-sans text-[#16161A] dark:bg-[#16161A] dark:text-[#F5F5F4]">
      <header className="flex items-center gap-3 px-8 py-6">
        <Logo size={36} />
        <span className="text-lg font-medium tracking-tight">
          Tony Cherian Jacob
        </span>
      </header>
      <main className="flex flex-1 flex-col items-start justify-center gap-6 px-8 pb-24">
        <p className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <span className="inline-block size-2.5 rounded-full bg-[#FF5C1A]" />
          Frontend developer
        </p>
        <h1 className="max-w-[12ch] text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          I build interfaces people enjoy using.
        </h1>
        <a
          href="https://github.com/TonyCJ7"
          className="inline-flex min-h-12 items-center rounded-full bg-[#FF5C1A] px-6 font-medium text-[#16161A] transition-colors hover:bg-[#e6500f]"
        >
          See my work on GitHub
        </a>
      </main>
    </div>
  );
}
