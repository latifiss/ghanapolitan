# Ghanapolitan

Ghanapolitan is a news and information platform covering Ghana, Africa and the wider world. It brings together editorial coverage, live updates, opinion, business reporting and financial-market information in one responsive experience.

## Product areas

- **News and latest stories** — editorial feeds, top stories, breaking coverage and article pages.
- **Topics and categories** — business, politics, sports, entertainment, Africa and world coverage.
- **Live coverage** — live article experiences and related updates.
- **Markets** — company, index, forex, commodity, crypto and market-data views.
- **Opinion and community** — opinion content, comments and article discussions.
- **Charts and data visualisations** — market and performance visualisations.

## Technology

- Next.js App Router
- React 19 and TypeScript
- Redux Toolkit and React Redux
- Styled Components
- Axios for API communication
- Recharts and D3 for visualisations

## Getting started

### Requirements

- Node.js 20 or later
- npm

### Install dependencies

```bash
git clone https://github.com/latifiss/ghanapolitan.git
cd ghanapolitan
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
.
├── ads/              # Advertisement components
├── app/              # App Router routes and layouts
├── components/       # Shared UI and visualisation components
├── data/             # Static and presentation data
├── hooks/            # Reusable React hooks
├── lib/api/          # API access modules
├── public/           # Static assets, fonts and images
├── store/            # Redux store, slices and providers
├── styles/           # Global styles and theme definitions
├── types/            # Shared TypeScript types
└── utils/            # Formatting and domain helpers
```

## API communication

The application consumes services hosted separately from this repository. API modules are grouped under `lib/api/`; the shared Axios client applies a finite request timeout and a consistent JSON `Accept` header.

If an upstream service is unavailable, the relevant page should present an appropriate empty, loading or error state rather than assuming that data is always available.

## Production

Create a production build before deploying:

```bash
npm run build
npm run start
```

The project can be deployed to a platform that supports Next.js. Configure any environment variables required by the API integrations in the deployment environment; never commit credentials or private keys.

## Contributing

1. Create a feature branch.
2. Keep changes focused and consistent with the existing App Router and component structure.
3. Run `npm run lint` and `npm run build` before opening a pull request.
4. Include screenshots for meaningful UI changes and note any API or environment assumptions.

## License

No license is currently specified. Contact the repository owner before redistributing or reusing the code.
