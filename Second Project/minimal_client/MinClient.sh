echo "------------------------------------------------------"
echo 
echo "Adding an ingredient"
echo 
curl -s -X POST localhost:3000/ingredients/addbyname/pomodoro
echo 
echo 
echo "------------------------------------------------------"
echo "------------------------------------------------------"
echo 
echo "Get the ingredient"
echo 
curl -s -X GET localhost:3000/ingredients/findbyname/pomodoro
echo 
echo 
echo "------------------------------------------------------"
echo "------------------------------------------------------"
echo 
echo "Updating the ingredient"
echo 
curl -s -X PUT localhost:3000/ingredients/updatebyname/pomodoro/mozzarella
echo 
echo 
echo "------------------------------------------------------"
echo "------------------------------------------------------"
echo 
echo "Get the updated ingredient"
echo 
curl -s -X GET localhost:3000/ingredients/findbyname/mozzarella
echo 
echo 
echo "------------------------------------------------------"
echo "------------------------------------------------------"
echo 
echo "You cannot find the old ingredient anymore"
echo 
curl -s -X GET localhost:3000/ingredients/findbyname/pomodoro
echo 
echo 
echo "------------------------------------------------------"
echo "------------------------------------------------------"
echo 
echo "Remove the ingredient"
echo 
curl -s -X DELETE localhost:3000/ingredients/remove/mozzarella
echo 
echo 
echo "------------------------------------------------------"



read -p "$*"