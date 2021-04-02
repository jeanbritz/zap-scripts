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

### Config parameters

Note: Not a complete list

#### Active Scan parameters [Source](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/parosproxy/paros/core/scanner/ScannerParam.java)

| Name                             | Data type | Default value | Example      | 
|  ---                             | ------    | -------      | ---- |
| `scanner.hostPerScan`            | `Integer` | 2     ||
| `scanner.threadPerHost`          | `Integer` | 2     ||
| `scanner.delayInMs`              | `Integer` | 0     ||
| `scanner.pluginHeader`           | `Boolean` | false ||
| `scanner.antiCSFR`               | `Boolean` | false ||
| `scanner.attackPrompt`           | `Boolean` | true  ||
| `scanner.attackRescan`           | `Boolean` | true  ||
| `scanner.clearFinished`          | `Boolean` | true  ||
| `scanner.maxResults`             | `Integer` | 1000  ||
| `scanner.maxScansInUI`           | `Integer` | 5     ||
| `scanner.advDialog`              | `Boolean` | false ||
| `scanner.defaultPolicy`          | `String`  | null  ||
| `scanner.attackPolicy`           | `String`  | null  ||
| `scanner.attackOnStart`          | `Boolean` | false ||
| `scanner.chartTimeInMins`        | `Integer` | 10    ||
| `scanner.maxRuleDurationInMins`  | `Integer` | 0     ||
| `scanner.maxScanDurationInMins`  | `Integer` | 0     ||
| `scanner.excludedParameters`     | `List`    | ?     ||
| `scanner.injectable`             | `Integer` | -     ||
| `scanner.enabledRPC`             | `Integer` | -     ||
| `scanner.scanHeadersAllRequests` | `Boolean` | false ||
| `scanner.addQueryParam`          | `Boolean` | false ||

#### Alert parameters [Source](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/zaproxy/zap/extension/alert/AlertParam.java)
| Name                      | Data type         | Default value | 
|  ---                      | ------            | -------       |
| `alert.mergeissues`       | `Boolean`         | true  ||
| `alert.maxInstances`      | `Integer`         | 20    ||
| `alert.overridesFilename` | `String`          |       ||

#### Breakpoint parameters [Source](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/zaproxy/zap/extension/brk/BreakpointsParam.java)
| Name                                        | Data type            | Default value      | 
|  ---                                        | ------               | -------      |
| `breakpoints.confirmDropMessage`            | `Boolean` | false |
| `breakpoints.buttonMode`                    | `Integer` | 1 |
| `breakpoints.alwaysOnTop`                   | `Boolean` | null (i.e. false) |
| `breakpoints.inScopeOnly`                   | `Boolean` | false |
| `breakpoints.showIgnoreRequestsButtons`     | `Boolean` | false |
| `breakpoints.javaScriptUrlRegex`            | `String`  | `.*\.js.*` |
| `breakpoints.cssAndFontsUrlRegex`           | `String`  | <code> \.\*\\.(?:css&vert;woff&vert;woff2&vert;ttf).\* </code> |
| `breakpoints.multimediaUrlRegex`            | `String`  | <code> .\*\\.(?:png&vert;gif&vert;jpg&vert;jpeg&vert;svg&vert;mp4&vert;mp3&vert;webm&vert;webp&vert;ico).* </code> |

#### Callback parameters [Source](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/zaproxy/zap/extension/callback/CallbackParam.java)
| Name                               | Data type             | Default value  | 
|  ---                               | ----                  | ------         |
| `callback.localaddr`               | `String`              | 0.0.0.0        |
| `callback.remoteaddr`              | `String`              | Auto-detect    |
| `callback.port`                    | `Integer`             | 0              |
| `callback.secure`                  | `Boolean`             | false          |

#### Database parameters [Source](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/parosproxy/paros/extension/option/DatabaseParam.java)
| Name                          | Data type             | Default value | 
|  ---                          | ----                  | ------        | 
| `database.compact`            | `Boolean`             | false         |
| `database.request.bodysize`   | `Integer`             | 16777216      |
| `database.response.bodysize`  | `Integer`             | 16777216      |
| `database.newsession`         | `Integer`             | 0             |
| `database.newsessionprompt`   | `Boolean`             | true          |
| `database.recoverylog`        | `Boolean`             | true          |

#### Proxy parameters [Source](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/parosproxy/paros/core/proxy/ProxyParam.java)
| Name                               | Data type             | Default value  | 
|  ---                               | ----                  | ------         |
| `proxy.ip`                         | `String`              | localhost      |
| `proxy.port`                       | `Integer`             | 8080           |
| `proxy.reverseProxy.use`           | `Integer`             | 0              |
| `proxy.reverseProxy.ip`            | `String`              | localhost      |
| `proxy.reverseProxy.httpPort`      | `Integer`             | 80             |
| `proxy.reverseProxy.httpsPort`     | `Integer`             | 443            |
| `proxy.behindnat`                  | `Boolean`             | false          |
| `proxy.securityProtocolsEnabled.protocol`   | `String`     | SSLv3,TLSv1,TLSv1.1,TLSv1.2 |
| `proxy.removeUnsupportedEncodings` | `Boolean`             | true           |
| `proxy.decodeGzip`                 |`Boolean`             | true           |

