"use client";

import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Presse-papiers indisponible : le lien mailto reste utilisable
    }
  };

  return (
    <button type="button" onClick={copy} className="btn btn-ghost" aria-live="polite">
      {copied ? <FiCheck className="text-accent" /> : <FiCopy />}
      {copied ? "Adresse copiée" : "Copier l’adresse"}
    </button>
  );
}
