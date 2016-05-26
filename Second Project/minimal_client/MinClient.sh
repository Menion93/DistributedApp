echo "------------------------------------------------------"
echo 
echo "Adding an ingredient"
echo 
curl -s -X POST $(docker-machine ip default2):8000/ingredients/addbyname/pomodoro
echo 
echo 
echo "------------------------------------------------------"
echo "------------------------------------------------------"
echo 
echo "Get the ingredient"
echo 
curl -s -X GET $(docker-machine ip default2):8000/ingredients/findbyname/pomodoro
echo 
echo 
echo "------------------------------------------------------"
echo "------------------------------------------------------"
echo 
echo "Updating the ingredient"
echo 
curl -s -X PUT $(docker-machine ip default2):8000/ingredients/updatebyname/pomodoro/mozzarella
echo 
echo 
echo "------------------------------------------------------"
echo "------------------------------------------------------"
echo 
echo "Get the updated ingredient"
echo 
curl -s -X GET $(docker-machine ip default2):8000/ingredients/findbyname/mozzarella
echo 
echo 
echo "------------------------------------------------------"
echo "------------------------------------------------------"
echo 
echo "You cannot find the old ingredient anymore"
echo 
curl -s -X GET $(docker-machine ip default2):8000/ingredients/findbyname/pomodoro
echo 
echo 
echo "------------------------------------------------------"
echo "------------------------------------------------------"
echo 
echo "Remove the ingredient"
echo 
curl -s -X DELETE $(docker-machine ip default2):8000/ingredients/remove/mozzarella
echo 
echo 
echo "------------------------------------------------------"



read -p "$*"