# Generated by Django 3.2.5 on 2022-05-16 09:45

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0002_auto_20220516_1242'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 16, 9, 45, 10, 551511, tzinfo=utc), verbose_name='date published'),
        ),
    ]
