from dataclasses import fields
from pyexpat import model
from statistics import mode
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import *
  
class Post_Serializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ['UserName', 'Text']

class Thread_Schema_Serializer(ModelSerializer):
    class Meta:
        model = threadSchema 
        fields = [ 'delete_password','board','createdon', 'bumpedon','reported', 'replies']

class replySchema_Serializer(ModelSerializer):
    class Meta:
        model= replysSchema 
        fields= ['text','delete_password','createdon','reported']