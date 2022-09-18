import re
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from .serializer import *


'''class UpdateReply (APIView):
    serializer_class = replySchema_Serializer
    def put (self,request):
        if not request.session.exists(request.session.session_key):
            request.session.create()
        seralizer = self.serializer_class(data=request.date)
        
        if seralizer.is_valid():
            text= seralizer.data.get('User sent text')
            delete_to_report = serializers.data.get('votes users count for a report for')
            createdon= serializers.data.get(' Data of Date posted')
            reported=serializers.data.get('Data of amount reported')
        if text == None:
            return Response({'Text': 'There is no data in text'},status =status.HTTP_404_NOT_FOUND)'''
        
    
class PostView(APIView):
    
    serializer_class = Post_Serializer
  
    def get(self, request):
        data = Post.objects.all()
        serializer = Post_Serializer(data,many=True)
        print(serializer.data)
        return Response(serializer.data)
  
    def post(self, request):
  
        serializer = Post_Serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)
# Create your views here.

class ThreadView(APIView):
    serializer_class = Thread_Schema_Serializer
    
    def get (self,request):
        data = threadSchema.objects.all()
        seralizer = Thread_Schema_Serializer(data, many=True)
        print(seralizer.data)
        return Response(seralizer.data)

    def post(self,request):

        serializer = Thread_Schema_Serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)
            

class ReplyView(APIView):
    serializer_class = replySchema_Serializer
    
    def get (self,request):
        data = replysSchema.objects.all()
        seralizer = replySchema_Serializer(data, many=True)
        print(seralizer.data)
        return Response(seralizer.data)

    def post(self,request):

        serializer = replySchema_Serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)
# Create your views here.
