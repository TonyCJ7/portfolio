export default function RowLift() {
  return (
    <span
      aria-hidden
      className="absolute -inset-y-4 -inset-x-6 -z-10 rounded-sm transition-[background-color,box-shadow] duration-150 ease-standard group-hover:bg-surface-lift group-hover:shadow-lift group-focus-visible-within:bg-surface-lift group-focus-visible-within:shadow-lift phone:-inset-x-4"
    />
  );
}
