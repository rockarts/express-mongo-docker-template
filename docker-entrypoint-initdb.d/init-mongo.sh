#!/usr/bin/env bash
mongoimport -u=root -p=password -d default -c users --jsonArray --file /tmp/users.json
mongoimport -u=root -p=password -d default -c testerEngagementSummaries --jsonArray --file /tmp/testerEngagementSummaries.json