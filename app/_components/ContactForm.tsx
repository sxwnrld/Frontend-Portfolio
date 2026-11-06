"use client";

import { useState, type FormEvent } from "react";
import Arrow from "./Arrow";
import FormField from "./FormField";

type Values = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const subjects = ["Proposition de stage", "Projet", "Question", "Autre"];
const MESSAGE_MAX = 2000;
const initialValues: Values = { name: "", email: "", subject: subjects[0], message: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Indiquez votre nom (2 caractères minimum).";
  if (!values.email.trim()) errors.email = "Indiquez votre adresse e-mail.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Cette adresse e-mail n’est pas valide.";
  if (values.message.trim().length < 10) errors.message = "Votre message doit faire au moins 10 caractères.";
  return errors;
}

// Pas de serveur : le message est envoyé via la messagerie du visiteur (lien mailto pré-rempli)
export default function ContactForm({ email }: { email: string }) {
  const [values, setValues] = useState<Values>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [sent, setSent] = useState(false);

  const errors = validate(values);
  // Une erreur ne s'affiche qu'une fois le champ quitté (ou après une tentative d'envoi)
  const visibleError = (name: keyof Values) => (touched[name] ? errors[name] : undefined);

  const handleChange = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleBlur = (name: string) => {
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    const firstError = (Object.keys(errors) as (keyof Values)[])[0];
    if (firstError) {
      document.getElementById(`field-${firstError}`)?.focus();
      return;
    }

    const subject = `${values.subject} — ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
    // Clic sur un lien temporaire plutôt que window.location : certains navigateurs
    // figent la page après une navigation vers mailto: sans application associée
    const link = document.createElement("a");
    link.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    link.click();
    setSent(true);
  };

  const reset = () => {
    setValues(initialValues);
    setTouched({});
    setSent(false);
  };

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-8 md:p-10">
        <p className="eyebrow inline-flex items-center gap-2.5">
          <span className="status-dot" /> Message prêt
        </p>
        <p className="mt-6 font-display text-2xl md:text-3xl font-semibold tracking-tight">
          Merci {values.name.trim()}, votre messagerie s’est ouverte avec le message pré-rempli.
        </p>
        <p className="mt-4 text-paper/70">
          Il ne reste plus qu’à l’envoyer. Si rien ne s’est ouvert, écrivez-moi directement à{" "}
          <a href={`mailto:${email}`} className="link-underline text-paper">
            {email}
          </a>
          .
        </p>
        <button type="button" onClick={reset} className="group btn btn-ghost mt-8">
          Écrire un autre message <Arrow />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <FormField
          name="name"
          label="Nom"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("name")}
          placeholder="Votre nom"
          autoComplete="name"
          maxLength={80}
        />
        <FormField
          name="email"
          label="E-mail"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("email")}
          placeholder="vous@exemple.com"
          autoComplete="email"
        />
      </div>
      <FormField
        name="subject"
        label="Objet"
        type="select"
        options={subjects}
        value={values.subject}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormField
        name="message"
        label="Message"
        type="textarea"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={visibleError("message")}
        placeholder="Bonjour Sawwan, …"
        maxLength={MESSAGE_MAX}
      />
      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" className="group btn btn-primary">
          Envoyer le message <Arrow />
        </button>
        <p className="text-sm text-muted">Le message s’ouvrira dans votre messagerie.</p>
      </div>
    </form>
  );
}
