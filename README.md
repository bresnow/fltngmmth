# FLTNGMMTH Development MonoRepo


## What's inside?

This repo uses [yarn](https://www.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Packages

- [packages/frontend](packages/frontend): a [Remix](https://remix.run/) application that makes up the public facing UX
- [packages/chain-extensions](packages/chain-extensions): Custom Gun hooks with types. Gun.chain === const
- [packages/server](packages/server): an ESM Node.js server that serves the frontend
- [packages/relay](packages/relay): Virtual desktop and relay server
- [packages/ui](packages/ui): React components styled with TailwindCss
- [packages/scripts](packages/scripts): Google ZX powered workflows
- [config](config): shared config and docker stack services markup

## Traefik Reverse Proxy & Load Balancing In Docker Swarm

Self-hosted deployment is a breeze. There are [swarm stacks](packages/proxy/traefik/traefik.yml) for the app and Traefik. Middleware redirects to https and uses a Lets Encrypt tls certificate resolver.

![Traefik Service Manager](.github/images/traefik1.png "Traefik1")

## Setup

Clone and install dependencies:

```
yarn
```

### Build

To build all apps and packages, run the following command:

```
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn dev
```

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Github Actions](https://github.com/features/actions)

### Patrons / Clients / FLTNGMMTH + XDESK Members :

Everything is merged. Bresnow will deliver deployment instructions to all points of contact.