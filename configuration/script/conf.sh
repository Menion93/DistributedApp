#!/bin/bash

echo $1

#configuration for only database machine 
if [ $1 == "db" ]; then
 apt-get install -y mongodb

#configuration on  all virtual machine machine
apt-get update
apt-get install -y nodejs

echo "configuration complete"

fi