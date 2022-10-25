FROM python:3.10
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /backend/django

COPY ./requirements.txt /backend/django/
RUN pip3 install -r requirements.txt

COPY ./docker_backend/init_backend.sh /backend/
RUN chmod +x /backend/init_backend.sh

# Run test
COPY ./manage.py /backend/django/
COPY ./src /backend/django/src
COPY ./docker_backend/test_settings.py /backend/django/src/settings.py
RUN python manage.py test

# ENTRYPOINT ["python", "manage.py"]
# CMD ["runserver", "0.0.0.0:8000"]
