import tracemalloc
tracemalloc.start()


class DataTypeIter():
    def iterate_for_list_type(self,array:list) -> None:
        for item_value in array:
          print(item_value)
          #i is not an index, it is the value
        for index, value in enumerate(array):
            # index is a name, value is the value in the list
            print('index number: ',index, '\n','value at index: ',value)
            
    def iterate_for_list_with_dict_items(self,array:list) -> None:
        for item_value in array:
            if type(item_value) == dict:
                self.iterate_for_dict(item_value)
        for index, value in enumerate(array):
            # index is a name, value is the value in the list
            print('array index: ',index)
            if type(value) == dict:
                self.iterate_for_dict(item_value)
                
    def iterate_for_dict(self,dictionary:dict) -> None: 
        for key in dictionary:
            dict_value = dictionary[key]
            if type(dict_value) == str:
                print('key: ',key,'\n','dict_value: ',dict_value)
            elif type(dict_value) == dict:
                self.iterate_for_dict(dict_value)
NAME= [{'candy':'chocolate','new york':'manhattan', 'soda':'coke', 'pizza':'cheese', 'favorite_things':{'candy':'chocolate', 'fun-time': 'sex'}}] #GLOBAL Variable stored in Heap

def main():
    iterator = DataTypeIter() #Variable stored in stack due to calling/instantiating a new object
    iterator.iterate_for_list_type(NAME)
    print('\n\n\n\n')
    iterator.iterate_for_list_with_dict_items(NAME)
    
if __name__ == '__main__':
    #If importing this file, main is not ran. Only when we press the play button on this, does it run.
    #pass

    main()
print("Current: %d, Peak %d" % tracemalloc.get_traced_memory())




            
       
       
       
       
       
       
       
       
                

""" 
JavaScript Equivalent:
for(let i = 0; i < Array.Length; i = i + 1)
{
    console.log(Array[i])
    //i is a number in this case
}


"""
