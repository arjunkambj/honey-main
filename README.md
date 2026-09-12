This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Workers

This app deploys to [Cloudflare Workers](https://developers.cloudflare.com/workers/) with the [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare).

```bash
bun run preview   # production build, then local Workers runtime
bun run deploy    # production build, then deploy to Workers
```

`deploy` publishes to `https://honey.<your-subdomain>.workers.dev`. To attach a custom domain, add a `routes` entry in `wrangler.jsonc` or bind the domain in the Cloudflare dashboard.

For git-push deploys, connect this repo in [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) with:

- Package manager: `bun`
- Build command: `bunx opennextjs-cloudflare build`
- Deploy command: `bunx opennextjs-cloudflare deploy`
