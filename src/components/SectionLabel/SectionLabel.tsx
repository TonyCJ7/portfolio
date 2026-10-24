import Label from "@/components/Label/Label";

type SectionLabelProps = {
  id: string;
  children: string;
};

export default function SectionLabel({ id, children }: SectionLabelProps) {
  return (
    <h2
      id={id}
      className="phone:sticky phone:top-0 phone:z-10 phone:-mx-(--gutter) phone:border-b phone:border-line phone:bg-ground/60 phone:px-(--gutter) phone:py-4 phone:backdrop-blur-sm"
    >
      <Label tone="muted" className="phone:text-fg">
        {children}
      </Label>
    </h2>
  );
}
