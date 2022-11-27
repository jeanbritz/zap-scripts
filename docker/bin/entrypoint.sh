#!/usr/bin/env bash
echo "Starting OWASP ZAP..."
xvfb-run zaproxy -daemon -newsession session -configfile $HOME/config.ini 2>&1
