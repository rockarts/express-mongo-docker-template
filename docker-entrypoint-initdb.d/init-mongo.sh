#!/usr/bin/env bash
mongoimport -u=mongouser -p=mongouserpassword -d default -c users --jsonArray --file /tmp/users.json
mongoimport -u=mongouser -p=mongouserpassword -d default -c testerEngagementSummaries --jsonArray --file /tmp/testerEngagementSummaries.json