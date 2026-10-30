import { FiArrowUpRight } from "react-icons/fi";

// Flèche animée : à placer dans un élément qui a la classe "group"
export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <span className={`arrow-swap ${className}`} aria-hidden="true">
      <FiArrowUpRight />
      <FiArrowUpRight />
    </span>
  );
}
