# Generated by Django 3.0.6 on 2020-06-06 23:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stock', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='brand',
            field=models.CharField(default='Set', max_length=20),
        ),
        migrations.AlterField(
            model_name='product',
            name='pkey',
            field=models.PositiveSmallIntegerField(default=0, unique=True),
        ),
    ]
