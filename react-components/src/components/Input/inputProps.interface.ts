export interface InputProps {
  type: string;
  label: string;
  name: string;
  refer: React.RefObject<HTMLInputElement>;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  errorText: string;
  testId: string;
}
