sudo apt-get update
sudo rm -r /etc/puppet/modules
mkdir -p /etc/puppet/modules;
puppet module install puppetlabs-mongodb;
mkdir /home/data;

echo "-------------------------------"
echo "Database Configuration Complete"
echo "-------------------------------"