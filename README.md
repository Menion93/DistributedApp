# DistributedApp
First homework of System Software Architecture teached by Luca Cabibbo at University of Roma 3.

Realized by:
Gregori Valerio
Mancini Miriana
Salvoni Andrea

##Setup of the enviroment for First Project
- run startup.bat/sh

##Setup of the enviroment for Second Project
For running project on Windows or Mac OX, create a VM with name "default" using docker-machine tool.
- docker-machine create --driver virtualbox default
- docker-machine start default

For creating the environment, go into "Second Project/webserver" folder and execute the command:
- docker-compose up -d

For running the minimal client, go into "Second Project/minimal_client" folder and execute MinClient.sh