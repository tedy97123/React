import re
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from rest_framework import status
from .serializer import *
from rest_framework.decorators import api_view 

MODEL_MAP = \
    {
        'About':[About,About_Serializer],
        'Brands':[Brands,Brands_Serializer],
        'Contact':[Contact,Contact_Serializer],
        'Experiences':[Experiences,Experiences_Serializer],
        'Skills':[Skills,Skills_Serializer],
        'Testimonials':[Testimonials,Testimonials_Serializer],
        'WorkExperience':[WorkExperience,WorkExperience_Serializer],
        'Works':[Works,Works_Serializer]
    }




class DBView(APIView):    
    """ Receives requests to perform GET,POST,PUT, and DELETE requests on model objects.
        Uses global mapping variable to assign active_models used based on requests' value for 'table' (String)
        Global mapping variable keys are paired with values that are nested arrays: First index (0) active_model instance, Second index (1) serializer instance

    Args:
        APIView (_type_): inherited model class
    """
    def __init__(self):
        self.active_serializer = None # This property will be updated.
    def post(self,request):
        post_data = request.data
        key = None
        
        if 'table' in post_data:
            key = post_data['table']
            self.active_serializer = MODEL_MAP[key][1] # Dynamic model map search for 2nd item in list.
            print('\n KEY AND SERIALIZER\n',key,'\n',self.active_serializer,'\n',)
        else:
            return Response({'Error': 'table key is missing'}, status = status.HTTP_404_NOT_FOUND)
        
        active_model = MODEL_MAP[key][0] #This will store the model object per mapping above; this will change depending on 'table' value inside post_data
        print('\n\n Active Model ',active_model, '\n\n')
        new_post = active_model.objects.create() #Create new entry of model
        
        serialized = self.active_serializer(instance= new_post , data=post_data)#seralizes the data in an instance for the fetch to pull from
        if serialized.is_valid():
            print('\n\n\n\n CHECK VALIDITY \n\n\n')
            serialized.save()
            return Response(serialized.data,status=status.HTTP_200_OK)#if data is valid , it saves the data and returns a 200_ok response
        #print(serialized.errors)
        return Response({'Error':serialized.errors},status = status.HTTP_201_CREATED)#if data is not valid(or isn't seralized) the not returns an error 201

                                                       
                                                                    
    def get(self,request):
        get_data = request.GET
        key = None
        print(get_data)
        if 'table' in get_data:
            key = get_data['table']
            self.active_serializer= MODEL_MAP[key][1]   
            print('\n KEY AND SERIALIZER\n',key,'\n',self.active_serializer,'\n',)
        else:
             return Response({'Error': 'table key is missing'}, status = status.HTTP_404_NOT_FOUND)
        active_model = MODEL_MAP[key][0]
        print('\n\n Active Model ',active_model, '\n\n')
        new_post = active_model.objects.all()
        serialized = self.active_serializer(instance=new_post , many = True)
        return Response(serialized.data,status=status.HTTP_200_OK)
        
      
          
    
    
     
     
     
     
     
     
     

     
     
     
    
    

    
    
    
    
    