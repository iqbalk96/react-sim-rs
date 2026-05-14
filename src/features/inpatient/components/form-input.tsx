import { Input } from "@/shared/components/ui/input";

interface FormInputProps {
  label: string;
  error?: string;
  type?: string;
  value: string;
  placeholder?: string;

  onChange: (value: string) => void;
}

export default function FormInput({
  label,
  error,
  type = "text",
  value,
  placeholder,
  onChange,
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}