# Backend Containarized Application
This application contains Django Backend with MySQL database in different containers.
## Instructions
<b>Note:</b> To run this application, you need to have docker and docker-compose installed on your computer. (Docker Desktop installs them both)
* Add .env file to Backend folder near this README.md file. (Without it, system will not work)
* Change directory (cd) to this folder via terminal.
* Run "docker-compose up".

## Development Notes
* Application refreshes when a file is changed that is watched by Django. This makes development with docker-compose possible. Therefore, non-containarized approach is not implemented.