from threading import Thread
from tkinter import Text
from django.db import models
from django.forms import DateField

# Create your models here.
class Post(models.Model):
    UserName = models.CharField(max_length=30)
    Text = models.CharField(max_length=500)
    
class replysSchema (models.Model):
    text=models.CharField( blank=False, max_length=500)
    delete_password=models.CharField(blank=False ,max_length=25)
    createdon= models.DateTimeField (null = False ,blank= False)
    reported=models.BooleanField(null=False ,blank = False)

class threadSchema (models.Model):
    text=models.CharField(blank=False ,max_length=500)
    delete_password=models.CharField(blank=False, null=False ,max_length=250)
    board=models.CharField(blank=False,max_length=500)
    createdon=models.DateTimeField(null = False ,blank= False)
    bumpedon=models.DateTimeField(null = False ,blank= False)
    reported=models.BooleanField(null=False ,blank = False)
    replies=models.ForeignKey(replysSchema,on_delete=models.SET_NULL,null=True )
    
 