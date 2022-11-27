FROM selenium/standalone-chrome:latest

ENV ZAP_VERSION=2.12.0
ENV PATH=/usr/local/bin:$HOME/bin:$PATH

USER root

# Install necessary OS packages
RUN apt-get update \
    && apt-get install -y openjdk-11-jdk xvfb \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /var/cache/*

WORKDIR /opt
# Install OWASP ZAP
RUN wget -c https://github.com/zaproxy/zaproxy/releases/download/v${ZAP_VERSION}/ZAP_${ZAP_VERSION}_Linux.tar.gz -O -| tar -xz \
 && ln -s /opt/ZAP_${ZAP_VERSION}/zap.sh /usr/local/bin/zaproxy \
 && chown -R seluser:seluser /opt/ZAP_${ZAP_VERSION}

RUN echo $HOME

WORKDIR $HOME
RUN echo $HOME
COPY . .
RUN chown -R seluser:seluser $HOME
RUN chmod +x bin/entrypoint.sh

USER seluser

ENTRYPOINT [ "entrypoint.sh" ]
