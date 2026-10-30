// En-tête commun des pages intérieures
export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <header className="container-x pt-40 md:pt-48 pb-16 md:pb-24">
      <p className="eyebrow fade-up">{eyebrow}</p>
      <h1 className="mt-6 font-display font-bold tracking-tight leading-[0.95] text-[clamp(2.75rem,8vw,6.5rem)]">
        <span className="line-mask">
          <span className="rise [animation-delay:80ms]">{title}</span>
        </span>
      </h1>
      {intro && (
        <p className="fade-up [animation-delay:300ms] mt-8 max-w-2xl text-lg md:text-xl text-paper/70 leading-relaxed">
          {intro}
        </p>
      )}
    </header>
  );
}
