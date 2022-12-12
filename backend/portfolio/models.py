from threading import Thread
from tkinter import Text
from django.db import models
from django.forms import DateField

# Create your models here.
class Post(models.Model):
    UserName = models.CharField(max_length=30)
    Text = models.CharField(max_length=500)
    class Meta:
        app_label = 'portfolio'
class replysSchema (models.Model):
    text=models.CharField( blank=False, max_length=500)
    delete_password=models.CharField(blank=False ,max_length=25)
    createdon= models.DateTimeField (null = False ,blank= False)
    reported=models.BooleanField(null=False ,blank = False)
    class Meta:
        app_label = 'portfolio'
class threadSchema (models.Model):
    text=models.CharField(blank=False ,max_length=500)
    delete_password=models.CharField(blank=False, null=False ,max_length=250)
    board=models.CharField(blank=False,max_length=500)
    createdon=models.DateTimeField(null = False ,blank= False)
    bumpedon=models.DateTimeField(null = False ,blank= False)
    reported=models.BooleanField(null=False ,blank = False)
    replies=models.ForeignKey(replysSchema,on_delete=models.SET_NULL,null=True )
    class Meta:
        app_label = 'portfolio'
    
class About (models.Model):
    title=models.CharField( blank=False, max_length=500)
    description=models.CharField( blank=False, max_length=500)
    fields=models.JSONField( blank=True,null=True)
    class Meta:
        app_label = 'portfolio'
        verbose_name = 'About'
        verbose_name_plural = 'About'
class Brands(models.Model):
    name=models.CharField( blank=False, max_length=500)
    title=models.CharField( blank=False, max_length=500)
    _type=models.CharField( blank=False, max_length=500)
    fields=models.JSONField( blank=True,null=True)
    class Meta:
        app_label = 'portfolio'
        verbose_name = 'Brand'
        verbose_name_plural = 'Brands'
class Contact (models.Model):
    name=models.CharField( blank=False, max_length=500)
    title=models.CharField( blank=False, max_length=500)
    _type=models.CharField( blank=False, max_length=500)
    fields=models.JSONField( blank=True,null=True)
    class Meta:
        app_label = 'portfolio'
        verbose_name = 'Contact'
        verbose_name_plural = 'Contacts'
class Experiences(models.Model):
    name=models.CharField( blank=False, max_length=500)
    title=models.CharField( blank=False, max_length=500)
    _type=models.CharField( blank=False, max_length=500)
    fields=models.JSONField( blank=True,null=True)
    class Meta:
        app_label = 'portfolio'
        verbose_name = 'Experience'
        verbose_name_plural = 'Experiences'
class Skills(models.Model):
    name=models.CharField( blank=False, max_length=500)
    title=models.CharField( blank=False, max_length=500)
    _type=models.CharField( blank=False, max_length=500)
    fields=models.JSONField( blank=True,null=True)
    class Meta:
        app_label = 'portfolio'
        verbose_name = 'Skill'
        verbose_name_plural = 'Skills'
class Testimonials (models.Model):
    name=models.CharField( blank=False, max_length=500)
    title=models.CharField( blank=False, max_length=500)
    _type=models.CharField( blank=False, max_length=500)
    fields=models.JSONField( blank=True,null=True)
    class Meta:
        app_label = 'portfolio'
        verbose_name = 'Testimonial'
        verbose_name_plural = 'Testimonials'
class WorkExperience (models.Model):
    name=models.CharField( blank=False, max_length=500)
    title=models.CharField( blank=False, max_length=500)
    _type=models.CharField( blank=False, max_length=500)
    fields=models.JSONField( blank=True,null=True)
    class Meta:
        app_label = 'portfolio'
        verbose_name = 'Work Experience'
        verbose_name_plural = 'Work Experience'
class Works (models.Model):
    name=models.CharField( blank=False, max_length=500)
    title=models.CharField( blank=False, max_length=500)
    _type=models.CharField( blank=False, max_length=500)
    fields=models.JSONField( blank=True,null=True)
    class Meta:
        app_label = 'portfolio'
        verbose_name = 'Work'
        verbose_name_plural = 'Works'
 