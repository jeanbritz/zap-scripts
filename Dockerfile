FROM selenium/standalone-chrome:latest

ENV ZAP_VERSION=2.10.0
ENV ZAP_PORT=8090
ENV PATH=/usr/local/bin/$PATH

USER root

# Install necessary OS packages
RUN apt-get update \
    && apt-get install -y \
    openjdk-8-jdk \
    xvfb \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /var/cache/*

WORKDIR /opt
RUN wget -c https://github.com/zaproxy/zaproxy/releases/download/v${ZAP_VERSION}/ZAP_${ZAP_VERSION}_Linux.tar.gz -O -| tar -xz \
 && ln -s /opt/ZAP_${ZAP_VERSION}/zap.sh /usr/local/bin/zap \
 && chown -R seluser:seluser /opt/ZAP_${ZAP_VERSION}

USER seluser
WORKDIR $HOME
COPY entrypoint.sh entrypoint.sh
COPY api-key.txt api-key.txt

EXPOSE $ZAP_PORT

ENTRYPOINT "/home/seluser/entrypoint.sh"