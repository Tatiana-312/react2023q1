export interface SelectProps {
  id: string;
  label: string;
  name: string;
  optionValues: string[];
  refer: React.RefObject<HTMLSelectElement>;
}
