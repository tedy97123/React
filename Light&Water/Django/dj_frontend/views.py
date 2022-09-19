from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect, csrf_exempt
from .models import *
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.decorators import api_view
from rest_framework.views import APIView
import django.contrib.auth as auth

from .serializer import Note_Serializer, Room_Serializer, CreateRoomSerializer, UpdateRoomSerializer, UserDataSerializer, VideoSerializer
from django.views import View
from datetime import datetime
from backend.settings import DEBUG

@method_decorator(ensure_csrf_cookie,name='get')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request):
        return Response({'Success': 'CSRF Cookie Set'})

class LogOutView(APIView):
    def post(self,request):
        auth.logout(request)
        try:
            return Response({'Success':'Logged Out Successfully'})
        except Exception as e:
            print(e)
            return Response({'Error': 'Problem Logging Out'})

#@method_decorator(csrf_protect,name="get")

class CheckAuth(APIView):
    permission_classes = (permissions.AllowAny,)
    @method_decorator(csrf_exempt,name="get")
    def get(self, request):
        isAuthenticated = request.user.is_authenticated

        if isAuthenticated:
            return Response({'Success':'Authenticated'})
        return Response({'Auth_Error':'Not Authenicated'})
    @method_decorator(csrf_exempt,name="post")
    def post(self,request):
        user_query=User.objects.filter(username='Hung')
        user = user_query[0]
        password_validate = user.check_password(request.data)
        if password_validate == True:
            return Response({'Validated': 'Current Password is verified'},status=status.HTTP_200_OK)
        return Response({'Invalidated': 'Current Password is not correct.'},status=status.HTTP_200_OK)
@method_decorator(csrf_exempt,name="get")
class GetUserData(APIView):
    serializer_class = UserDataSerializer
    permission_classes = (permissions.AllowAny,)
    def get(self,request):

        if request.user.is_authenticated:
            print('\n\n Authenticated \n\n')
        """ else:
            return Response({'Error_Auth': 'Not Authenticated'}) """
        test = User.objects.filter(username='Hung')
        test = test[0]
        user_data_query = React_User_Data.objects.filter(user=test)#request.user)
            
        if user_data_query == 0:
            return Response({'Error_User_Data': 'Problem 1 with Database - Maintenance requested'})

        user_data = user_data_query[0]
        serialized_user_data = self.serializer_class(user_data_query[0],many=False)
        serialized_user_data.profile_pic=user_data.profile_pic_URL() #overwrites original Image Field object with url we can use
        return Response({'user_data':serialized_user_data.data,'username':'hung'})#request.user.username})

#@method_decorator(csrf_protect,name="post")
@method_decorator(csrf_exempt,name="post")
class LoginView(APIView):
    serializer_class = UserDataSerializer
    permission_classes = (permissions.AllowAny,)
    def post(self,request):
        data = request.data
        username=data['username']
        password=data['password']

        if not request.session.exists(request.session.session_key): # if user has not been previously viewed site
            request.session.create()
            print('\n\n session created... \n\n')
        
        user_query=User.objects.filter(username=username)
        user = auth.authenticate(username=username, password=password)
        if len(user_query) == 0:
            return Response({'Error_User': 'UserID does not Exist'})
        if user is not None:
            auth.login(request, user)
            return Response({'Success':'User Logged In', 'username':username})
        else:
            print('Failed to Authenticate')
            return Response({'Login_Error':'Invalid User Credentials. Please Try Again.'})

#@method_decorator(csrf_protect,name='post')
class SignUpView(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserDataSerializer
    def post(self,request):
        """ if not request.session.exists(request.session.session_key): # if user has not been previously viewed site
            request.session.create()
            print('\n\n session created... \n\n') """
        data = request.data
        username = data['username']
        password=data['password']

        del data['username']
        del data['password']
        user_query = User.objects.filter(username=username)
        serializer = self.serializer_class(data=data)
        
        if serializer.is_valid() == False:
            print('\n\n Error \n ',serializer.errors,'\n\n')
            return Response({'Error':'User Data Invalid'},status=status.HTTP_400_BAD_REQUEST)
          
        if len(user_query) == 0:
            try:
                auth.password_validation.validate_password(password)
                print('\n\n',password,'\n\n')
            except Exception as e:
                print('\n\n Password Validation Error: ',e,'\n\n')
                return Response({'Error_Pass':e})
            
            new_user = User.objects.create(username=username)
            new_user.set_password(password)
            new_user.save()
            print('\n\n',new_user,'\n\n',new_user.password)
            react_user_data=React_User_Data(user=new_user,**serializer.data)
            react_user_data.save()
            return Response({'Success':'Created New User'},status=status.HTTP_200_OK)
        
        user = user_query[0]
        return Response({'Error_User':f' UserID {user} already exists.'},status=status.HTTP_200_OK)


class CreateRoomView(APIView):

    serializer_class= CreateRoomSerializer
    def post(self,request):
        if not request.session.exists(request.session.session_key): # if user has not been previously viewed site
            request.session.create()
            print('\n\n Session Created Again \n\n')
        serializer = self.serializer_class(data=request.data) # creates a new instance

        if serializer.is_valid():
            guest_can_pause = serializer.data['guest_can_pause']
            votes_to_skip=serializer.data['votes_to_skip']
            title=serializer.data['title']
            category=serializer.data['category']
            host = request.session.session_key
            queryset=React_Room.objects.filter(host=host) # filter is good for if there may be multiple objects with same host, but this is not allowed in models at the moment
            if queryset.exists():
                room=queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip=votes_to_skip
                room.title=title
                room.category=category

                room.save(update_fields=['guest_can_pause','votes_to_skip'])
                request.session['JoinCode']=room.code
            else:
                room = React_Room(host=host,guest_can_pause = guest_can_pause, votes_to_skip = votes_to_skip,category=category,title=title)
                room.save()
                request.session['JoinCode']=room.code
            print('\n Room was Created ', room.code, f': {request.session.session_key}', '\n')
            return Response(Room_Serializer(room).data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.error_messages)

            return Response({'Error':'Data sent is not valid JSON'},status=status.HTTP_404_NOT_FOUND)

class VideosView(APIView):
    serializer_class=VideoSerializer
    def get(self,request):
        videos=Videos.objects.all() #returns queryset. Call index 0 if only one object. No index call if > 1 object
        if len (videos) == 1:
            serialized=self.serializer_class(videos[0],many=False)
        elif len (videos) > 1:
            serialized=self.serializer_class(videos,many=True)
        else:
            return Response({'Error': 'Video Data does not exist'},status=status.HTTP_404_NOT_FOUND)

        return Response(serialized.data,status=status.HTTP_200_OK)








