# Generated by Django 4.0.3 on 2022-03-15 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('look', '0003_threadschema'),
    ]

    operations = [
        migrations.CreateModel(
            name='React',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('detail', models.CharField(max_length=500)),
            ],
        ),
    ]
