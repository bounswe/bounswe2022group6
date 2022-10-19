FROM python:3.10
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /backend
COPY . /backend/
RUN pip3 install -r requirements.txt
RUN chmod +x /backend/init_backend.sh

# Run test
RUN python manage.py test

# ENTRYPOINT ["python", "manage.py"]
# CMD ["runserver", "0.0.0.0:8000"]
