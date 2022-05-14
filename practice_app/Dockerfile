FROM python:3.8
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /practice_app
COPY . /practice_app/

RUN pip install -r requirements.txt

RUN python manage.py test

RUN chmod +x init-docker.sh
RUN --mount=type=tmpfs,target=/practice_app/database ./init-docker.sh
RUN mv db.sqlite3 database/db.sqlite3

ENTRYPOINT ["python", "manage.py"]

CMD ["runserver 0.0.0.0:8000"]
