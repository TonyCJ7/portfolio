import Label from "@/components/Label/Label";
import type { Education } from "@/types/content";

type EducationRowProps = {
  education: Education;
  showLanguages?: boolean;
};

export default function EducationRow({ education, showLanguages = true }: EducationRowProps) {
  return (
    <div>
      <dl className="border-y border-line py-4">
        <div className="grid grid-cols-[2fr_6fr] gap-x-6 phone:grid-cols-1 phone:gap-y-2">
          <dt>
            <Label as="time" dateTime={education.from} className="block pt-1">
              {education.dates}
            </Label>
          </dt>
          <dd>
            <p className="text-title text-fg wrap-anywhere">{education.degree}</p>
            <p className="mt-1 text-small text-fg-2 wrap-anywhere">{education.institution}</p>
          </dd>
        </div>
      </dl>
      {showLanguages && <p className="mt-4 text-small text-fg-2">{education.languages}</p>}
    </div>
  );
}
