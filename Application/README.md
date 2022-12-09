### Used ports for appications:
* Database: 5432
* Backend: 8000
* Frontend: 3000

## Instructions For Containerized Execution of Frontend-Backend-Database
<b>Note:</b> To run this application, you need to have docker and docker-compose installed on your computer. (Docker Desktop installs them both)
* Add .env file to Backend folder. (Without it, system will not work)
* Add .env file to Frontend folder. (Without it, system will not work)
* Change directory (cd) to Frontend folder via terminal.
* Run "docker-compose up --build".

Those commands will run necessary tests, install necessary applications on the containers, and then run the application.