sudo apt-get update
sudo apt-get install -y nodejs; 
sudo apt-get install -y npm;
sudo ln -s /usr/bin/nodejs /usr/bin/node
npm install /home/vagrant/webserver
npm install forever -g
forever start /home/vagrant/webserver/bin/www