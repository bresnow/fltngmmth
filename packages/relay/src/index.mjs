import process from "process";
import express, {Router} from "express"
import { chalk } from "zx";
import Docker, { log } from "../lib/DockerApi.mjs";
import initGun from "./initGun.mjs"
import { Config } from "./config.mjs";
import fs from "fs"
import {read} from "fsxx"
import path from "path"
import http from "http"
export const error = (...args) => {
  console.error(chalk.redBright(args));
};





let docker = new Docker({ host: Config.PROXY_HOST, port: Config.PROXY_PORT });
try {
  let services = await docker.getAllServices();
  services.forEach(async (service) => {
    if (Config.VIRTUAL_PEER.includes(service.Spec.Name)) {
      log(
        chalk.blueBright.bold("\nCURRENT SERVICE \n"),
        JSON.stringify(service, null, 2)
      );
    }
  });
} catch (e) {
  error(e);
}


export const gun = await initGun([], {
  web: http.createServer(function (req, res) {
    let filePath = '.' + req.url
    if (filePath == './') {
      filePath = './index.html'
    }
    if (filePath == './gun') {
      filePath = './node_modules/gun/examples/basic/paste.html'
    }

    let extname = path.extname(filePath)
    let contentType = 'text/html'
    switch (extname) {
      case '.js':
        contentType = 'text/javascript'
        break
      case '.css':
        contentType = 'text/css'
        break
      case '.json':
        contentType = 'application/json'
        break
      case '.png':
        contentType = 'image/png'
        break
      case '.jpg':
        contentType = 'image/jpg'
        break
      case '.wav':
        contentType = 'audio/wav'
        break
    }
    console.log(JSON.stringify(filePath, null, 2))

    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code == 'ENOENT') {
          fs.readFile('./404.html', function (error, content) {
            res.writeHead(404, { 'Content-Type': contentType })
            res.end(content, 'utf-8')
          })
        }
        else {
          res.writeHead(500)
          res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n')
          res.end()
        }
      }
      else {
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(content, 'utf-8')
      }
    })
  }).listen(Config.RELAY_PORT) });

// let swarmServices = gun.path(["__SwarmContext", "Services"]);
