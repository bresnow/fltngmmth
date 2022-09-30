# NOTE: THIS PROJECT HAS BECOME ALOT MORE THAN A FRONTEND BOILERPLATE!!!

## This repo has gone from a frontend app boilerplate to an open source cloud infrastructure boilerplate. While Remix is now roughly 25% of the project Gun has proven to be the hero we need but not deserve. (Thank you Mark). The whole repo is going through some brief but necessary refactoring but development script commands run without hiccups. After all the dust is settled remote urls will change and reverse engineering will not be as "easy".

![Screenshot](.github/images/front.png "frontend")
This is a boilerplate for creating distributed web apps on Docker Swarm deployment infrastructure. Using GunDB, SEA authentication and React v18. Out of the box two or more boilerplate instances can share data via GUN's peer websocket feature.

## Under The Hood

- [x] Remix.GUN Relay Server Adapter
- [x] Authorization with Gun.Sea/ Gun User Api
- [x] Data Encrytion
- [x] Docker Swarm Production Deployment
- [x] Traefik Proxy & Load Balancing

## What's inside?

This repo uses [yarn](https://www.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Packages

- [packages/remix](packages/remix): a [Remix](https://remix.run/) application that makes up the public facing UX
- [packages/chain-extensions](packages/chain-extensions): Custom Gun hooks with types. Gun.chain === const
- [packages/server](packages/server): an ESM Node.js server that brings everything together for deployment
- [packages/relay](packages/relay): Relay server to execute javascript modules (specifically .mjs) via websocket connection since Remix's one (f\*cking inconvenient) weakness is that it can only run commonjs. Excuse my french but I almost quit Remix entirely.
- [packages/ui](packages/ui): React components styled with TailwindCss
- [packages/temporal]: Temporal workflows (SOON)
- [packages/scripts](packages/scripts): Google ZX powered playbook workflow that are called by package.json script commands
- [config](config): shared eslint config that includes @remix-run/eslint-config , prettier and base tsconfig that other packages inherit from

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
