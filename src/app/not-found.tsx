import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import LogoLink from "@/components/Logo/LogoLink";
import { notFound } from "@/content/notFound";

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-dvh max-w-measure flex-col justify-center gap-6 px-6"
    >
      <LogoLink size={36} className="self-start" />
      <Label>404</Label>
      <h1 className="text-headline text-fg">{notFound.title}</h1>
      <p className="text-body text-fg-2">{notFound.body}</p>
      <div>
        <Button href="/">{notFound.cta}</Button>
      </div>
    </main>
  );
}
