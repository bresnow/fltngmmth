import process from 'process'
export const Config = {
  PROXY_HOST: process.env.PROXY_HOST ?? "socket-proxy",
  PROXY_PORT: process.env.PROXY_PORT ?? 8000,
  RELAY_PORT: process.env.RELAY_PORT ?? 3000,
  ROUTE_DIRECTORY: process.env.ROUTE_DIRECTORY ?? "src/routes",
  VIRTUAL_PEER: process.env.VIRTUAL_PEER ?? "http://front_app:3333/gun",
  DEBUG: !!process.env.DEBUG,
};

