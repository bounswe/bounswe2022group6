### Used ports for appications:
* Database: 5432 (Development Build Only)
* Backend: 8000
* Frontend: 3000

### Applications Used For Containers

#### Database
PostgreSQL for database has been used for keeping JSON like data to make annotation implementation easier

#### Backend
Django has been used to make use of its fast and eficient development tools

#### Frontend
React and NodeJS has been used to make use of their useful frontend methods.

## Contents of .env file

### For Backend
* POSTGRES_HOST: Name of the SQL container
* POSTGRES_USER: Username for SQL container
* POSTGRES_PASSWORD: Password of the username

* DJANGO_SECRET_KEY: Secret Key for Django to Keep Backend Secure
* DJANGO_SUPERUSER_USERNAME: Superuser's username for Django Application
* DJANGO_SUPERUSER_EMAIL: Superuser's email for Django Application
* DJANGO_SUPERUSER_PASSWORD: Superuser's pasword for Django Application

### For Frontend
* REACT_APP_S3_BUCKET_NAME: Bucket name of the react app
* REACT_APP_AWS_REGION: Amazon Container region
* REACT_APP_AWS_KEY: Amazon Key
* REACT_APP_AWS_SECRET: Amazon Secret

## Instructions For Containerized Execution of Frontend-Backend-Database
<b>Note:</b> To run this application, you need to have docker and docker-compose installed on your computer. (Docker Desktop installs them both)
* Add .env file to Backend folder. (Without it, system will not work)
* Add .env file to Frontend folder. (Without it, system will not work)

### For development build
* Change directory (cd) to Frontend folder inside Application folder via terminal.
* Run "docker-compose up --build".

### For production build
* Change directory (cd) to Application folder via terminal.
* Run "docker-compose up --build".

Those commands will run necessary tests, install necessary applications on the containers, and then run the application.
