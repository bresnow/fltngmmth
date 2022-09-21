import process from 'process'
export const Config = {
  PROXY_HOST: process.env.PROXY_HOST ?? "socket-proxy",
  PROXY_PORT: process.env.PROXY_PORT ?? 8000,

  DEBUG: !!process.env.DEBUG,

  ADVERTISE_IP: process.env.ADVERTISE_IP,
};
