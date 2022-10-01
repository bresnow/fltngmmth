# FLTNGMMTH Development MonoRepo


## What's inside?

FLTNGMMTH uses [yarn](https://www.yarnpkg.com/) as a package manager. It includes the following packages:

### Packages

- [frontend](frontend): [Remix](https://remix.run/) 
- [chain-extensions](chain-extensions): Custom Gun hooks with types. Gun.chain === const
- [relay](relay): Virtual desktop and relay server
- [scripts](scripts)
- [config](config)

## Traefik Reverse Proxy & Load Balancing In Docker Swarm

Self-hosted deployment is a breeze. There are [swarm stacks](proxy/traefik/traefik.yml) for the app and Traefik. Middleware redirects to https and uses a Lets Encrypt tls certificate resolver.

![Traefik Service Manager](.github/images/traefik1.png "Traefik1")

## Setup
