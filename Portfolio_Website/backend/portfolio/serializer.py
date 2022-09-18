from dataclasses import fields
from pyexpat import model
from statistics import mode
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import *
  
  

class About_Serializer(ModelSerializer):
    class Meta():
        model = About
        fields = '__all__'
        
class Brands_Serializer(ModelSerializer):
    class Meta():
        model = Brands
        fields = '__all__'

class Contact_Serializer(ModelSerializer):
    class Meta():
        model = Contact
        fields = '__all__'
        
class Experiences_Serializer(ModelSerializer):
    class Meta():
        model = Experiences
        fields = '__all__'
        
class Skills_Serializer(ModelSerializer):
    class Meta():
        model = Skills
        fields = '__all__'
        
class Testimonials_Serializer(ModelSerializer):
    class Meta():
        model = Testimonials
        fields = '__all__'
        
class WorkExperience_Serializer(ModelSerializer):
    class Meta():
        model = WorkExperience
        fields = '__all__'
        
class Works_Serializer(ModelSerializer):
    class Meta():
        model = Works
        fields = '__all__'




