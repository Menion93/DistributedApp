# DistributedApp
Project for System Software Architecture teached by Luca Cabibbo at University of Roma 3.

Realized by:
Gregori Valerio
Mancini Miriana
Salvoni Andrea

##Setup of the environment for First Project
- run startup.bat/sh

##Setup of the environment for Second Project
Check your OS:
1) For running the second project on Windows or Mac OX, create a VM with name "default" using docker-machine tool.
- docker-machine create --driver virtualbox default
- docker-machine start default

For creating the environment, go into "Second Project/webserver" folder and execute the command:
- docker-compose up -d

For running the minimal client, go into "Second Project/minimal_client" folder and execute MinClient.sh

2) For running the second project on Linux, there is no need for a VM. Execute only:
- docker-compose up -d	(in "Second Project/webserver" folder)

For running correctly the minimal client, modify the MinClient.sh script in this way: 
- change "$(docker-machine ip default)" with "localhost" in all curl command.
- save the file
- execute the file into "Second Project/minimal_client" folder
