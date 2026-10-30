# Portfolio 

Portfolio personnel développé avec Next.js, React et Tailwind CSS, déployé sur Vercel.

**Site en ligne :** <https://frontend-portfolio-psi-mauve.vercel.app>

Il présente mon profil, mes compétences et mes projets en développement web à travers une interface moderne et responsive.

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Accueil |
| `/projets` | Liste des projets |
| `/projets/[slug]` | Détail d'un projet (généré statiquement) |
| `/competences` | Compétences techniques et soft skills |
| `/a-propos` | Parcours et présentation |
| `/contact` | Coordonnées et réseaux |

## Technologies

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [ESLint 9](https://eslint.org/) avec `eslint-config-next`

## Lancer le projet

Prérequis : [Node.js](https://nodejs.org/) 20.9 ou plus récent.

```bash
npm install
npm run dev
```

Le site est ensuite accessible sur <http://localhost:3000>.

## Scripts

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère la version de production |
| `npm run start` | Lance la version de production (après `build`) |
| `npm run lint` | Vérifie le code avec ESLint |

## Structure du projet

```text
├── app/
│   ├── _components/      # Composants réutilisables (Navbar, Footer, ...)
│   ├── _data/            # Contenu du site : infos, compétences, projets
│   ├── projets/          # Liste et pages détail des projets
│   ├── competences/
│   ├── a-propos/
│   ├── contact/
│   ├── layout.tsx        # Layout global (polices, navbar, footer)
│   ├── page.tsx          # Page d'accueil
│   ├── not-found.tsx     # Page 404
│   └── globals.css
├── public/               # Assets statiques
├── eslint.config.mjs
├── tailwind.config.cjs
├── postcss.config.cjs
└── package.json
```
