# Katsumi Portfolio

This is the portfolio website for Katsumi, built with Remix and Cloudflare Pages.

## Tech Stack

- **Framework**: [Remix](https://remix.run/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Styled Components](https://styled-components.com/)
- **Linting & Formatting**: [Biome](https://biomejs.dev/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## Prerequisites

- [Node.js](https://nodejs.org/) (>=20.0.0)
- [pnpm](https://pnpm.io/) (Recommended package manager)
- Optional: [Nix](https://nixos.org/) for a pinned local development shell

## Getting Started

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd katsumi-portfolio
    ```

2.  Enter the Nix development shell if you use Nix:

    ```bash
    nix develop
    ```

3.  Install dependencies:

    ```bash
    pnpm install
    ```

4.  Start the development server:

    ```bash
    pnpm dev
    ```

## Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the app for production.
- `pnpm start`: Runs the built app in production mode locally.
- `pnpm lint`: Checks for linting errors using Biome.
- `pnpm lint:fix`: Fixes linting errors using Biome.
- `pnpm format`: Formats code using Biome.
- `pnpm typecheck`: Runs TypeScript type checking.
- `pnpm deploy`: Builds and deploys the app to Cloudflare Pages.

## Deployment

This project is configured to deploy to Cloudflare Pages.

To deploy manually:

```bash
pnpm deploy
```

Ensure you have `wrangler` installed and authenticated if deploying from your local machine.
