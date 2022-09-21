import esbuild from 'esbuild'
import { $, chalk } from "zx"
import "zx/globals"
const dockerApi = "src/docker/DockerApi.mts"
$.verbose = false
try {
    await esbuild
        .build({
            outfile: "lib/DockerApi.mjs",
            entryPoints: {
                dockerApi
            },
            define: {
                "process.env.NODE_ENV": `"production"`
            },
            platform: "node",
            format: "esm",
            bundle: false,
            write: true,
        })

    // eslint-disable-next-line no-undef
    await $`tsc  ${dockerApi} --declaration --emitDeclarationOnly --baseUrl ${__dirname} --outfile lib/DockerApi.d.ts --esModuleInterop`

} catch (error) {
    console.error(chalk.yellow(error))

}