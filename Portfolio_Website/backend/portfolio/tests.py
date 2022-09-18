from django.test import TestCase

# Create your tests here.
class SuperClass:
    def __init__(self,arg1: str = 'white',arg2:str = 'blue'):
        self.skincolor = arg1
        self.eyecolor = arg2
    def fly(self):
        print('WE are flying')
        
        
#superclass = SuperClass('white','blue')
#superclass.fly()


class OverWriteClass(SuperClass):
    def __init__(self,arg3,arg4):
        self.height = arg3
        self.weight = arg4
        super().__init__()
    def walk(self):
        print('Overwritten is walking')
    def fly(self):
        print('We are not flying')
        
overwritten = OverWriteClass('5 ft','100 lbs')
overwritten.fly()
        
