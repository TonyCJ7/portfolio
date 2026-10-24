import Logo from "@/components/Logo/Logo";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex items-center gap-3 px-8 py-6">
        <Logo size={36} />
        <span className="text-title tracking-tight">Tony Cherian Jacob</span>
      </header>
      <main className="flex flex-1 flex-col items-start justify-center gap-6 px-8 pb-24">
        <p className="flex items-center gap-2 text-small font-medium text-fg-2">
          <span className="inline-block size-2.5 rounded-full bg-accent" />
          Frontend developer
        </p>
        <h1 className="max-w-measure text-display">
          I build interfaces people enjoy using.
        </h1>
        <a
          href="https://github.com/TonyCJ7"
          className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-medium text-ink transition-colors hover:bg-accent-hover"
        >
          See my work on GitHub
        </a>
      </main>
    </div>
  );
}
