import { FiSearch } from "react-icons/fi";

type Props = {
  domains: { label: string; count: number }[];
  domain: string;
  query: string;
  // Le filtre ne garde aucun état : il prévient le parent de chaque choix
  onDomainChange: (domain: string) => void;
  onQueryChange: (query: string) => void;
};

export const ALL = "Tous";

export default function ProjectFilter({ domains, domain, query, onDomainChange, onQueryChange }: Props) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div role="group" aria-label="Filtrer par domaine" className="flex flex-wrap gap-3">
        {domains.map((d) => {
          const active = d.label === domain;
          return (
            <button
              key={d.label}
              type="button"
              onClick={() => onDomainChange(d.label)}
              aria-pressed={active}
              className={`rounded-full border px-5 py-2.5 text-sm transition-colors duration-300 ${
                active ? "border-accent bg-accent text-ink" : "border-line-strong text-paper hover:border-paper"
              }`}
            >
              {d.label}
              <span className={`ml-2 font-mono text-xs ${active ? "text-ink/70" : "text-muted"}`}>{d.count}</span>
            </button>
          );
        })}
      </div>

      <label className="relative block md:w-72">
        <span className="sr-only">Rechercher un projet</span>
        <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Rechercher…"
          className="w-full rounded-full border border-line-strong bg-surface py-2.5 pl-11 pr-5 text-sm text-paper placeholder:text-muted outline-none transition-colors duration-300 focus:border-accent"
        />
      </label>
    </div>
  );
}
