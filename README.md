# chatapp
E2E chat apllication
Web devolopment Chat-app complete guide for any Devolopers in React and Node with MYSQL
                                                                                                                         
Step1)Install the current version of Node JS(to test the version you can use node -v)

Step2)Then create a folder for your project i am creating a folder called chatapp

Step3)Initialize your project with this command npm init you will get a lot of options in the terminal fill out all those thing once you have completed all these things you will get a package.json file

step4) create an index.js file and log something and test weather it is working fine or not to rin the node file use the following command node .\index.js 

Step5)Install Express-JS which we will discuss in detail what is it about.

command: npm i --save express

Step6) now to build an application you have to create a server on some ports and start building the application the code to create the server is listed on the code repostiories and the link will be shared

step7)install nodemon this a small tool to restart the server once the changes are made we dont have to manually restart the index.js page all the time

command:npm i nodemon -g 

now you can start the server with nodemon index.js instead of node index.js

To make this even simpler go to your package.json file and in the scripts type start:nodemon index.js 

now to start you application you can just type npm start it will work

Step8:creating a .env file and config the main reason for creating this is separate our deployement process for EX i am having a devolopment environment and i also have test environment if all the ports and config i create are not in a refined manner to move the code to production you will have lots of issue 

1)create a file called .env and folder called config
2)Install dotenv with this command npm i --save dotenv

complete .env documentaion link for your refrence
https://www.npmjs.com/package/dotenv

step9)
creating the basic structure for our project
1)controller -to perform the buisness logic
2)database- perfrom all db related activities
3)middleware-to perform middleware logic
4)models to perform the schema related activitied to the DB or ORM activities will be handeled in this file
5)routers-router to perform all routing activities
6)sockets-network io activities
7)uploads-image upload folder
8)validators-validation logic folder

step10)
1)install postgress sql and create a DB called chat-app
2)install seequelize it is an ORM framework which will handel the databse objets as a javascript objects where we dont have to write any manual sql's
commands:
npm i --Save pg -g
npm i --Save sequelize-cli -g
npm i --Save sequelize -g 
once this seequelize is installed  you have to create a .sequelizerc file for creating the models path

Now give the sequelize init command to intialize the models and the seeders this will create 

config, contains config file, which tells CLI how to connect with database
models, contains all models for your project
migrations, contains all migration files
seeders, contains all seed files

step11)Now according to the sequelizerc file created database.js and migrations seeders file will be placed accordingly 

step12)Now you have to create a table in the Db for mainitaing all your transaction for that seequelize has provide some commands to make the process simple now we will create a use table in the chat-app db to maintain the user information for our register functionality

1)sequelize model:create --name user --attributes firstname:string,lastname:string,email:string,password:string,gender:string,avatar:string
this command will create three files

This will:

Create a model file user in models folder;
Create a migration file with name like XXXXXXXXXXXXXX-create-user.js in migrations folder.

Note: Sequelize will only use Model files, it's the table representation. On the other hand, the migration file is a change in that model or more specifically that table, used by CLI. Treat migrations like a commit or a log for some change in database.


Note:if you want to drop the table for some reasons you can use the following command

step13)Now we will create some dummy user data in the DB for our initial devolopment process for that you need the seeder file in the                E:\chatapp\chatbackend\database\seeders

step14)Now execute this command to insert the sample data into the table
sequelize db:seed:all

step15)if you see there is a  problem in the table what is it the password is been expose and there is no security in it for that we are using bcrypt a encryption function to prevent against the bruteforce attack

npm i bcrypt

Now if you have to undo the dummy data that was inserted you can use the following command

sequelize db:seed:undo

step16)Next thing is refactor the code and test the methods in the postman to start our original dev work

step17)Install body-parser this to arrange all the http request in a sing object that is we call it as aheavylifting it will be explained to you in detail

step18)completing the register and login functionality for the chat users 

step19)Adding the validation use express validator
