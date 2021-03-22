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
