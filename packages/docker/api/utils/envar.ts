export default {
    keys: {
        DOCKER_API: 'DOCKER_API',
        DEBUG: 'DEBUG',
        DEFAULT_PASSWORD: 'DEFAULT_PASSWORD',
        ADVERTISE_IP: 'ADVERTISE_IP',
    },


    DOCKER_API: process.env.DOCKER_API,

    DEBUG: !!process.env.DEBUG,

    ADVERTISE_IP: process.env.ADVERTISE_IP,

    DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD,
}
