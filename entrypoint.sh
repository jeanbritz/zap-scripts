#!/usr/bin/env bash
echo "Starting ZAP..."
xvfb-run zap -daemon -host localhost -port ${ZAP_PORT} -config api.key=$(cat api-key.txt) 2>&1