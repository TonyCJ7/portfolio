type UsageLineProps = {
  code: string;
};

export default function UsageLine({ code }: UsageLineProps) {
  return (
    <pre className="overflow-x-auto rounded-sm border border-line bg-surface p-3 font-mono text-small text-fg-2">
      <code>{code}</code>
    </pre>
  );
}
