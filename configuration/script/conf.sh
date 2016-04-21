#!/bin/bash

echo "$1"

#configuration on  all virtual machine machine
apt-get update

if [ $1 == "ws" ]; then
	sudo apt-get install -y nodejs; sudo ln -s /usr/bin/nodejs /usr/bin/node
fi
#prepare database machine for puppet provisioning
if [ $1 == "db" ]; then
	mkdir -p /etc/puppet/modules;
	puppet module install puppetlabs-mongodb;
fi

echo "configuration complete"

