// Champ de formulaire contrôlé : la valeur vient du parent (props),
// chaque saisie est renvoyée au parent via onChange (communication enfant → parent)
type Props = {
  name: string;
  label: string;
  value: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string) => void;
  error?: string;
  type?: "text" | "email" | "textarea" | "select";
  options?: string[];
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
};

const base =
  "w-full rounded-xl border bg-surface px-5 py-4 text-paper placeholder:text-muted outline-none transition-colors duration-300 focus:border-accent";

export default function FormField({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  options = [],
  placeholder,
  autoComplete,
  maxLength,
}: Props) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  const common = {
    id,
    name,
    value,
    onBlur: () => onBlur(name),
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: `${base} ${error ? "border-red-400" : "border-line-strong"}`,
  };

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="eyebrow">
          {label}
        </label>
        {maxLength && (
          <span className="font-mono text-xs text-muted" aria-hidden="true">
            {value.length} / {maxLength}
          </span>
        )}
      </div>

      <div className="mt-3">
        {type === "textarea" ? (
          <textarea
            {...common}
            rows={6}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={(e) => onChange(name, e.target.value)}
            className={`${common.className} resize-y min-h-40`}
          />
        ) : type === "select" ? (
          <select
            {...common}
            onChange={(e) => onChange(name, e.target.value)}
            className={`${common.className} [color-scheme:dark]`}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...common}
            type={type}
            maxLength={maxLength}
            placeholder={placeholder}
            autoComplete={autoComplete}
            onChange={(e) => onChange(name, e.target.value)}
          />
        )}
      </div>

      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
