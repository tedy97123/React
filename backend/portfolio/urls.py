from django.contrib import admin
from django.urls import path
from portfolio.views import *

urlpatterns = [
    path('api/schema/', DBView.as_view(), name='portfolio_schema'),
    path('api/schema/(?<table>)', DBView.as_view(), name='portfolio_schema'),
    #path('',DBView.as_view(),name= 'portfolio_home')
]
