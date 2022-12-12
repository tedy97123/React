from django.contrib import admin
from .models import *

models = [About,Brands,Contact,Experiences,Skills,Testimonials,WorkExperience,Works]
for i in models:
    admin.site.register(i)

# Register your models here.
#

