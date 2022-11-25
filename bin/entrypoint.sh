#!/usr/bin/env bash
echo "Starting ZAP..."
xvfb-run zaproxy -daemon -newsession session -configfile $HOME/config.ini 2>&1
