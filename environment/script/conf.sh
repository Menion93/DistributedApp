#!/bin/bash

echo "$1"

apt-get update

#prepare webServer machine for puppet provisioning
if [ $1 == "ws" ]; then

	#remove old puppet modules if present
	sudo rm -r /etc/puppet/modules

	#install latest puppet modules
	mkdir -p /etc/puppet/modules;
	puppet module install willdurand-nodejs;

	sudo apt-get install -y nodejs; 
	sudo apt-get install -y npm;
	sudo ln -s /usr/bin/nodejs /usr/bin/node
fi

#prepare database machine for puppet provisioning
if [ $1 == "db" ]; then

	sudo rm -r /etc/puppet/modules
	mkdir -p /etc/puppet/modules;
	puppet module install puppetlabs-mongodb;
	mkdir /home/data;
fi

echo "configuration complete"

