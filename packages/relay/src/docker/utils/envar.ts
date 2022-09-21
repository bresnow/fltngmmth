export const Config =  {
  keys: {
    DOCKER_API: "DOCKER_API",
    DEBUG: "DEBUG",
    DEFAULT_PASSWORD: "DEFAULT_PASSWORD",
    ADVERTISE_IP: "ADVERTISE_IP",
  },

  DOCKER_API: process.env.DOCKER_API,


    PROXY_HOST: process.env.PROXY_HOST ?? "socket-proxy",
    PROXY_PORT: process.env.PROXY_PORT ??8000,

  DEBUG: !!process.env.DEBUG,

  ADVERTISE_IP: process.env.ADVERTISE_IP,

  DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD,
};
