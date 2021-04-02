# OWASP ZAP scripts

This repository contains some useful scripts to be used with OWASP ZAP

## Docker file

The `Dockerfile` builds an image with OWAZP ZAP v2.10.0 as an daemon process running

This docker build serves as a PoC to show how ZAP can be placed within a Docker container and be accessed via its
built-in API interface.

The base image `selenium/standalone-chrome:latest` is quite big in comparison to ZAP and further improvements can be
made to only include the necessary files for ZAP.

To build the `Dockerfile` the following command can be used:

```shell
docker build -t owasp-zap:latest
```

And to create a container the following command can be used:

```shell
docker run -p 8090:8090 --name owasp-zap-local owasp-zap:latest
```

Docker compose file is also supplied to make deployment easier

## Command-line switches

See more command-line switches here: https://www.zaproxy.org/docs/desktop/cmdline/

Here follows a list of the common switches you might use.

| Name                         |Format             | Example      | Link |
|  ---                         | ------            | -------      | ---- |
| Daemon mode (headless)       | `-daemon`         |              |      |
| Local proxy hostname         | `-host <hostname>`| `-host localhost` | | 
| Local proxy port             | `-port <port>`    | `-port 8090` |      |
| ZAP Hook                     | `-hook <file.py>` | `-hook my-hooks.py` | https://www.zaproxy.org/docs/docker/scan-hooks/
| Config parameters            | `-config <param>` | `-config scanner.threadPerHost=20` | See below

### Config parameters available
#### Scanner parameters

| Name                             |Format             | Example      | 
|  ---                             | ------            | -------      |
| `scanner.hostPerScan`            | `scanner.hostPerScan=<number>`   ||
| `scanner.threadPerHost`          | `scanner.threadPerHost=<number>` ||
| `scanner.delayInMs`              |||
| `scanner.pluginHeader`           |||
| `scanner.antiCSFR`               |||
| `scanner.attackPrompt`           |||
| `scanner.attackRescan`           |||
| `scanner.clearFinished`          |||
| `scanner.maxResults`             |||
| `scanner.maxScansInUI`           |||
| `scanner.advDialog`              |||
| `scanner.defaultPolicy`          |||
| `scanner.attackPolicy`           |||
| `scanner.attackOnStart`          |||
| `scanner.chartTimeInMins`        |||
| `scanner.maxRuleDurationInMins`  |||
| `scanner.maxScanDurationInMins`  |||
| `scanner.excludedParameters`     |||
| `scanner.injectable`             |||
| `scanner.enabledRPC`             |||
| `scanner.scanHeadersAllRequests` |||
| `scanner.addQueryParam`          |||

#### Alert parameters
| Name                      |Format             | Example      | 
|  ---                      | ------            | -------      |
| `alert.mergeissues`       |||
| `alert.maxInstances`      |||
| `alert.overridesFilename` |||

#### Breakpoint parameters
| Name                                        |Format             | Example      | 
|  ---                                        | ------            | -------      |
| `breakpoints.confirmDropMessage`            |||
| `breakpoints.buttonMode`                    |||
| `breakpoints.alwaysOnTop`                   |||
| `breakpoints.inScopeOnly`                   |||
| `breakpoints.showIgnoreRequestsButtons`     |||
| `breakpoints.javaScriptUrlRegex`            |||
| `breakpoints.cssAndFontsUrlRegex` |||
| `breakpoints.multimediaUrlRegex`  |||

#### Database parameters
| Name                  |Format             | Example      | 
|  ---                  | ----              | ------       |
| `database.compact`            |||
| `database.request.bodysize`   |||
| `database.response.bodysize`  |||
| `database.newsession`         |||
| `database.newsessionprompt`   |||
| `database.recoverylog`        |||

## Proxy parameters
| Name                  |Format             | Example      | 
|  ---                  | ----              | ------       |
| `proxy.ip`  |||
| `proxy.port` |||
| `proxy.reverseProxy.use` |||
| `proxy.reverseProxy.ip` |||
| `proxy.reverseProxy.httpPort` |||
| `proxy.reverseProxy.httpsPort` |||
| `proxy.behindnat` |||
| `proxy.securityProtocolsEnabled` |||
| `proxy.protocol` |||
| `proxy.removeUnsupportedEncodings` |||
| `proxy.decodeGzip` |||
